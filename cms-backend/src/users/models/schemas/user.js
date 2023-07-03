const mongoose = require('mongoose');
const { Schema } = mongoose;

  
const user = new Schema({
    username: {
        minLength: 5,
        maxLength: 50,
        type: String, 
        required: true, unique: true
    },
    email: {
        minLength:5,
        maxLength:100,
        type: String, 
        required: true, unique: true,
    }, 
    pass_hash: {type: String, required: true},
    created: { type: Date, default: Date.now },
    // meta: {
    //     votes: Number,
    //     favs: Number
    // }

})


user.path('username').validators = [
    {
        validator: (value) => {
            usernameCount = mongoose.models.User.countDocuments({ username: value })
            return !usernameCount
        }, message: "username already exists"
    },
]

user.path('email').validators = [{
    validator: (value) => {
        emailCount = mongoose.models.User.countDocuments({ email:value })
        console.log(emailCount)
        return !emailCount
    }, message: "Email already exists"
}]


// user.path('username').validators.push( async (value) => {
//     return value.length < 3 ? false : true
// })

// user.path('username').validate(async (value) => {
//     // Check username is unique
//     const usernameCount = await mongoose.models.User.countDocuments({username: value });
//     return !usernameCount;
// }, 'Username already exists');

// user.path('email').validate(async (value) => {
//     const emailCount = await mongoose.models.User.countDocuments({email: value });
//     return !emailCount;
// }, 'Email already exists');
  


user.methods.auth = (input_password) => {
    let isAuthenticated = false

    

    return isAuthenticated
}

module.exports = user