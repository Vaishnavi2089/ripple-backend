import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
const userSchema =  new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,
            default: ""

        },
        password:{
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        },
        isOnline: {
            type: Boolean,
            default: false
        },
        lastSeen: {
            type: Date,
            default: Date.now
        }


    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()

})
userSchema.methods.isPasswordCorrect = async function(password){
     return await bcrypt.compare(password,this.password)

}

export const User = mongoose.model("User", userSchema)