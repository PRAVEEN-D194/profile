const express = require("express");
const certificatemodule = require("../module/certificate.js");
const getcertificate = async (req, res, next)=>{
    console.log("nammatha");
    try{
        const certificate = await certificatemodule.find({});
        console.log(certificate);
        if(certificate.length !== 0){
            res.status(201).json({
                success:true,
                message : "connect successfull",
                certificate : certificate
            });
        }else{
            res.status(404).json({
                success:false,
                message : "data not found"
            });
        }
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {getcertificate : getcertificate}