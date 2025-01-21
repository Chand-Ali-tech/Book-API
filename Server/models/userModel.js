const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: [true, 'Email already exists'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        trim: true,
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

// Document Middleware(pre, post) || Query Middleware(pre, post) || Aggregation Middleware(pre, post)
userModel.pre('save', async function(next){
    if(!this.isModified('password')) return next(); //Do not hash the password if it is not modified.
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Instance Method --> One instance of User
userModel.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model('User', userModel);
module.exports = User;