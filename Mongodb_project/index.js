const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/studentDatabase")
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log("not connected", e));

const studentSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  grades: String,
  email: String,
});

const extraSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  Hobby: String,
  Club: String,
  email: String,
});

const academicRecord = new mongoose.model("academicRecord", studentSchema);
const extraRecord = new mongoose.model("extraRecord", extraSchema);

const studentData = async () => {
  try {
    const data = await academicRecord.create([
      {
        studentId: 1,
        name: "Aman",
        grades: "A",
        email: "xyz@gmail.com",
      },
      {
        studentId: 2,
        name: "Abhishek",
        grades: "B",
        email: "abc@gmail.com",
      },
      {
        studentId: 3,
        name: "Dolly",
        grades: "C",
        email: "pqr@gmail.com",
      },
      {
        studentId: 4,
        name: "Gauri",
        grades: "D",
        email: "jkl@gmail.com",
      },
      {
        studentId: 5,
        name: "Ayush",
        grades: "E",
        email: "efg@gmail.com",
      },
    ]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

studentData();

const extraCurricularData = async () => {
  try {
    const extraData = await extraRecord.create([
      {
        studentId: 1,
        name: "Aman",
        Hobby: "Gaming",
        Club: "Titans",
        email: "xyz@gmail.com",
      },
      {
        studentId: 2,
        name: "Abhishek",
        Hobby: "Reading",
        Club: "Stevens",
        email: "abc@gmail.com",
      },
      {
        studentId: 3,
        name: "Dolly",
        Hobby: "Skipping",
        Club: "Patriots",
        email: "pqr@gmail.com",
      },
      {
        studentId: 4,
        name: "Gauri",
        Hobby: "Writing",
        Club: "Aliens",
        email: "jkl@gmail.com",
      },
      {
        studentId: 5,
        name: "Ayush",
        Hobby: "Photography",
        Club: "Warriors",
        email: "efg@gmail.com",
      },
    ]);
   console.log(extraData) ;
  }
  
  catch (err) {
    console.log(err);
  }
};


extraCurricularData();

// CRUD Operations for Testing. 
// Get or Read the Data. 
const getDocument = async()=>{
    //const result = await academicRecord.find();
    const result = await academicRecord.find({name: "Aman"});
    console.log(result);
    }
//getDocument();

// Update the Data.

const updateExtraRecord = async () => {
    try {
      const updatedRecord = await extraRecord.findOneAndUpdate(
        { studentId: 3 },
        { $set: { Hobby: "Drawing" } },
        { new: false }
      );
      console.log("Updated extra-curricular record:", updatedRecord);
    } catch (err) {
      console.log("Error updating extra-curricular record:", err);
    }
  };

  //updateExtraRecord();

// Delete the Data.

const deleteExtraRecord = async () => {
    try {
      const deletedRecord = await extraRecord.findOneAndDelete({
        studentId: 6,
      });
      console.log("Deleted extra-curricular record:", deletedRecord);
    } catch (err) {
      console.log("Error deleting extra-curricular record:", err);
    }
  };

  //deleteExtraRecord();