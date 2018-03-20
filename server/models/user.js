const mongoose = require('mongoose');
const { Schema } = mongoose;    //mongoose object has a property called Schema, 
                                //take that and assign to Schema variable

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);