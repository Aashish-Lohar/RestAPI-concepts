const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/students')
.then(()=>console.log("connection is established"))
.catch((err)=>console.log('No connection',err))