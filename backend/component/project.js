const express = require("express");
const projectmodule = require("../module/project.js");
const getproject = async (req, res, next)=>{
    try{
        console.log("hello")
        const project = await projectmodule.find({});
        if(project.length !== 0){
            res.status(200).json({
                success:true,
                message : "connect successfull",
                project : project
            });
        }else{
            res.status(404).json({
                success:false,
                message : "data not found"
            });
        }
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {getproject : getproject}