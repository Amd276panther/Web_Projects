const express = require("express");
const app = express();
const cors = require("cors");
const port = 3200;
app.use(cors());
const Food = require("./models/foodInfo");
require("./db/connection")
app.use(express.json());


app.get("/", (req, res) => {
    res.send("<h1>WELCOME TO Food API </h1>");
  });
  app.get("/getFoodData", async (req, res) => {
    try {
      const nutrition = await Food.find({});
      res.status(201).send(nutrition);
    } catch (e) {
      console.log(e);
    }
  });
  
//   app.get("/getFoodData/:name", async (req, res) => {
//     const name = req.params.ranking;
//     try {
//       const foodData = await Food.findOne({ name: name });
//       if (!foodData) {
//         return res.status(400).json({ error: "Food Not Found" });
//       }
//       res.status(200).json(foodData);
//     } catch (error) {
//       console.log(error);
//     }
//   });
  
  
  app.post("/foods", async (req, res) => {
    try {
      const newRecord = await Food.create(req.body);
      res.status(200).send(newRecord);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  
  app.listen(port, () =>{
      console.log(`server is listening at port number ${port}`);
  });