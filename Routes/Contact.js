const express = require("express")
const Router = express.Router()
const Contact = require('../models/Contact')
const Controllers = require('../ContactControllers/ContactControllers')

//test
Router.get("/hello",(req,res)=>{
    res.send("hello from slh")
})

//Post Contact
Router.post("/post",Controllers.postContact)

//Get all contacts
Router.get('/',async(req,res)=>{
    try {
        const result = await Contact.find()
        res.status(200).send({response:result ,msg:"get Contacts Success"})
    } catch (error) {
        res.status(500).send({msg:"can not get Contacts"})
    }
})

//Get One By ID
Router.get('/:id',async(req,res)=>{
    try {
        const result = await Contact.findOne({_id:req.params.id})
        res.status(200).send({response:result ,msg:"get Contact by Id Success"})
    } catch (error) {
        res.status(500).send({msg:"can not get Contact check Contact ID"})
    }
})

//Delete By ID 
Router.delete("/:id",async(req,res)=>{
    try {
        const result = await Contact.deleteOne({_id:req.params.id})
        result ?
        res.status(200).send({msg:"Contact Deleted"})
        :res.status(400).send("there is no Contact With thids ID ")
    } catch (error) {
        res.status(500).send({msg:"Error can not delete Contact"})
    }
})

// Update Contact By ID

Router.put("/:id",async(req,res)=>{
    try {
        const result = await Contact.updateOne({_id:req.params.id},{$set:{...req.body}})
        result ?
        res.status(200).send({msg:"Contact Updated"})
        :res.status(400).send("there is no Contact With thids ID ")
    } catch (error) {
        res.status(500).send({msg:"Error can not Update Contact"})
    }
})


module.exports =  Router