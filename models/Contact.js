const mongoose = require('mongoose')

const {Schema, model} = mongoose

const ContactSchema = new Schema({ 
    name: {type:String, required:true},
    email: {type:String},
    phone: {type:String}
});

module.exports= Contact = model("contact",ContactSchema)