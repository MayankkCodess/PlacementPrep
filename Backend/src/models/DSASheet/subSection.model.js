import mongoose from "mongoose";

const subSectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
    index: true
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const SubSection = mongoose.model("SubSection",subSectionSchema); 

export default SubSection;