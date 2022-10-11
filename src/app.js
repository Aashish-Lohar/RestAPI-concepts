const express=require('express');
const db=require('./db/connect');
const student=require('./models/students');
const router=require('./routers/student_router')
const app=express();
const port=process.env.PORT || 3000;

app.use(express.json());
app.use(router);
//below is routing using app,now we will do routing through Router() function
// create new student
// app.post('/students',(req,res)=>{
//     console.log(req.body);
//     const st=new student(req.body);
//     st.save().then(()=>{
//         res.status(201).send('hello from student');
//     }).catch((e)=>res.status(400).send(e));
// })

// app.get('/students',async(req,res)=>{
//     try {
//         const result=await student.find();
//         console.log(result)
//         res.send(result);
//     } catch (error) {
//         res.status(400).send(error)
//     }   
// })

// app.get('/students/:id',async(req,res)=>{
//     try {
//         const _id=req.params.id;
//         const result=await student.findById(_id);
//         if(!result){
//             return res.status(404).send();
//         }
//         else{
//             res.status(200).send(result);
//         }
//         console.log(result);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

// app.patch('/students/:id', async(req,res)=>{
//     try {
//         const _id=req.params.id;
//         const result=await student.findByIdAndUpdate(_id,req.body);
//         res.send(result);
//         console.log(result)
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })

// app.delete('/students/:id', async(req,res)=>{
//     try {
//         const _id=req.params.id;
//         const result=await student.findByIdAndDelete(_id);
//         if(!req.params.id){
//             return res.status(400).send();
//         }
//         res.send(result);
//         console.log(result)
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })
app.listen(port,()=>{
    console.log('success');
})