import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        requires: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['student','recruiter'],
        required: true
    },
    profile:{
        bio: {type: String},
        skills: [{type: String}],
        resume: {type: String},
        company: {type: mongoose.Schema.Types.Objected, ref:'Company'},
        profilePhoto:{
            type: String,
            default:""
        }
    },

},{timestamps: true});
export const User = mongoose.model('User',userSchema);