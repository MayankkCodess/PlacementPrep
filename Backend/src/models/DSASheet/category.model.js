import mongoose from "mongoose"; 

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    order:{
        type:Number,
        default: 0
    }
}, {timestamps:true});

const Category = mongoose.model("Category", categorySchema);

export default Category;




// you need to add this in future so think first how it works then add it 
// subSectionSchema.index(
//   { name: 1, categoryId: 1 },
//   { unique: true }
// );