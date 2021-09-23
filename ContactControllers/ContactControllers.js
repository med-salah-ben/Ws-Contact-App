const Contact = require('../models/Contact')

exports.postContact = async (req,res)=>{
    try {
        //create a new Contact with the model Contact
        const newContact = new Contact(req.body)
        //test 1 if user has an email
        if(!req.body.email){
            res.status(400).send({msg:"email is required"})
            return
        }
        //test 2 if the email already exist
        const user = await Contact.findOne({email:req.body.email})
        if(user){
            res.status(400).send({msg:"Email already exist"})
            return
        }
        // save the Contact
        const response = await newContact.save()
        res.send({response:response,msg:"Contact saved"})

    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"can not save Contact"})
    }
}