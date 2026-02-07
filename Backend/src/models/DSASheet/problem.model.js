import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true,
        trim:true
    },
    difficulty:{
        type:String,
        enum:["Easy","Medium","Hard"],
        required:true,
        index:true
    },
    youtubeLink:{
        type:String
    },
    leetcodeLink:{
        type:String
    },
    subSectionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubSection',
        required:true,
        index:true
    }
},{timestamps:true});
 

const Problem =  mongoose.model("Problem",problemSchema);

export default Problem;