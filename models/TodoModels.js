import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
title:String,
description:String,

})

const todoModel = mongoose.model('todos',todoSchema);

export default todoModel;