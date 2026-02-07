import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "../models/DSASheet/category.model.js";
import SubSection from "../models/DSASheet/subSection.model.js";
import Problem from "../models/DSASheet/problem.model.js";
import { dsaSheetData } from "../data/dsaSheetData.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");

    //Clear old data if any
    await Promise.all([
      Category.deleteMany(),
      SubSection.deleteMany(),
      Problem.deleteMany()
    ]);

    console.log(" Old Data Deleted");

    for (let i = 0; i < dsaSheetData.length; i++) {
      const categoryData = dsaSheetData[i];

      // Create Category
      const createdCategory = await Category.create({
        name: categoryData.category.trim(),
        order: i
      });

      //  Prepare SubSections
      const subSectionDocs = categoryData.subSections.map((sub, index) => ({
        name: sub.title.trim(),
        categoryId: createdCategory._id,
        order: index
      }));

      const createdSubSections = await SubSection.insertMany(subSectionDocs);

      // Prepare Problems in Bulk
      const problemDocs = [];

      createdSubSections.forEach((subSectionDoc, subIndex) => {
        const problems = categoryData.subSections[subIndex].problems;

        problems.forEach(problem => {
          problemDocs.push({
            name: problem.title.trim(),
            difficulty: problem.difficulty,
            youtubeLink: problem.youtubeLink || "",
            leetcodeLink: problem.leetcodeLink || "",
            subSectionId: subSectionDoc._id
          });
        });
      });

      await Problem.insertMany(problemDocs);

      console.log(
        `${createdCategory.name} → ${createdSubSections.length} subsections → ${problemDocs.length} problems inserted`
      );
    }

    console.log("Seeding Completed Successfully");
    await mongoose.disconnect();
    process.exit(0);

  } catch (error) {
    console.error("Seeding Error:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedDatabase();
