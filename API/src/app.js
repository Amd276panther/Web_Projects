const express=require('express');
const app=express();
const cors=require('cors')
const port1=3200;
app.use(cors());
const MenRanking=require('./models/cricketinfo');
require('./db/conn');
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1>WELCOME TO API CREATION </h1>')
})
app.get('/getmendata',async (req,res)=>{
try{
const getmen=await MenRanking.find({});
res.status(201).send(getmen)
}
catch(e){
    console.log(e);
}
})
app.post('/mens',async (req,res)=>{
    try{
        console.log('req.body',req.body);
        const addingmenRecord=new MenRanking(req.body);
        console.log('addingmenRecord',addingmenRecord);
        const insertData=await addingmenRecord.save();
        console.log(insertData);
        res.status(201).send(insertData)

    }
    catch(e){
        console.log(e);
    }
})


app.listen(port1,()=>{
    console.log(`serevr is listening at port number ${port1}`);
});