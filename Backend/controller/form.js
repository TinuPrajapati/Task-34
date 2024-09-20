import Cloud from "../models/cloud.js";

const form =(req,res)=>{
    const {name,email,number}=req.body;
    
    if(!name) throw "Please Enter name";
    if(!email) throw "Please Enter email";
    if(!number) throw "Please Enter message";

    const data = new Cloud({
        name,email,number
    });

    data.save();
    res.status(201).json(data);
}

export default form;