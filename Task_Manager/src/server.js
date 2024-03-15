const express = require("express");
const bodyParser = require("body-parser");
const Task = require("./models/taskInfo");
const Course = require("./models/courseInfo");

// Importing Task and Course models
const cors = require("cors");

require("./db/connection");

const app = express();
const PORT = 3003;

//API middleware
app.use(express.json());
app.use(express.urlencoded()); //to decode the data from HTML Form
  app.use(bodyParser.json());
  app.use(cors());
app.use(express.static('src'))
// API routes

app.get("/", (req, res) => {
  res.send("<h1>WELCOME TO Task API </h1>");
});



// Express route to add a task
app.post("/addTask", async (req, res) => {
  const parcel = req.body;
  if (!parcel) {
    return res.status(400).send("Task data not provided");
  }

  try {
    const { courseId, taskName, dueDate, additionalDetails } = req.body;
    if (!courseId || !taskName || !dueDate) {
      return res.status(400).json({ success: false, message: "Incomplete task data provided" });
    }

    const newTask = new Task({ courseId, taskName, dueDate, additionalDetails });
    await newTask.save();
    return res.status(200).json({ success: true, message: "Task added successfully" });
  } catch (error) {
    console.error("Error adding task:", error);
    return res.status(500).json({ success: false, message: "Failed to add task" });
  }
});


// Express route to retrieve tasks for a specific course
app.get("/courses/:courseId/tasks", async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const tasks = await Task.find({ courseId: courseId });
    console.log(tasks);
    if (tasks.length === 0) {
      return res.status(404).json({ success: false, message: "No tasks found for the specified course" });
    } else {
      return res.json({ success: true, tasks });
    }
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    return res.status(500).json({ success: false, message: "Failed to retrieve tasks" });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
