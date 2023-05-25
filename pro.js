const express=require('express');
const bodyParser=require('body-parser');
const bookRouter=require('./Route/books');

const app=express();
const PORT=3000;

app.use(bodyParser.json());
app.use('/books',bookRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})