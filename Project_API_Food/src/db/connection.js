const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/foodNutritionAPI')
.then(()=>console.log('Database is connected'))
.catch(()=>console.log('database is no t connected'))