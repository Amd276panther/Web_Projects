const express = require("express");
const app2 = express();
const cors = require("cors");
const port = 3200;
app2.use(cors());
const MenRanking = require("./models/cricketinfo");
require("./db/conn");
app2.use(express.json());

app2.get("/", (req, res) => {
  res.send("<h1>WELCOME TO API CREATION </h1>");
});
app2.get("/getmendata", async (req, res) => {
  try {
    const getmen = await MenRanking.find({});
    res.status(201).send(getmen);
  } catch (e) {
    console.log(e);
  }
});

app2.get("/getmendata/:ranking", async (req, res) => {
  const ranking = req.params.ranking;
  try {
    const menData = await MenRanking.findOne({ ranking: ranking });
    if (!menData) {
      return res.status(400).json({ error: "Player Not Found" });
    }
    res.status(200).json(menData);
  } catch (error) {
    console.log(error);
  }
});

// app.post('/mens',async (req,res)=>{
//     try{
//         console.log('req.body',req.body);
//         const addingmenRecord=new MenRanking(req.body);
//         console.log('addingmenRecord',addingmenRecord);
//         const insertData=await addingmenRecord.save();
//         console.log(insertData);
//         res.status(201).send(insertData)

//     }
//     catch(e){
//         console.log(e);
//     }
// })

app2.post("/mens", async (req, res) => {
  try {
    const newRecord = await MenRanking.create(req.body);
    res.status(200).send(newRecord);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delete data from backend
app2.delete("/mens/:ranking", async (req, res) => {
    const ranking = req.params.ranking;
    try{
        const deleteRecord = await MenRanking.findOneAndDelete({ranking})
        if(!deleteRecord){ 
            return res.status(400).json({ error: "Player not found" });
        }   
            res.status(200).json(deleteRecord);
    } catch(error){
        console.log(error);
    }
});

app2.listen(port, () =>{
    console.log(`server is listening at port number ${port}`);
});
