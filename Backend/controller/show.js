import Cloud from "../models/cloud.js";

const show =async (req,res)=>{
    const data =await Cloud.find({});

    res.status(200).json(data);
}

export default show;