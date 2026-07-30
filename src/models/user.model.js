import mongoose, {Schema} from "mongoose";
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


export const User = mongoose.model("User", userSchema)