// MongoDB Connection
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/student_tasks")
.then(()=>console.log('Database is connected'))

.catch(()=>console.log('database is not connected'));

