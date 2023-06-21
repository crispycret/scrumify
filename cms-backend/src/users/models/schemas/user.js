const mongoose = require('mongoose');
const { Schema } = mongoose;

  
const user = new Schema({
    username: String, // String is shorthand for {type: String}
    email: String, 
    pass_hash: String,
    created: { type: Date, default: Date.now },
    // body: String,
    // comments: [{ body: String, date: Date }],
    // meta: {
    //     votes: Number,
    //     favs: Number
    // }
});
  
module.exports = user