
const express = require ('express');
const cors =require ('cors');

const app=express();


const port = process.env.PORT || 5000;

app.use(cors());

const language=require('./src/programing.json')

app.get('/',(req,res)=>{
    res.send('this is home page')
});

app.get('/allCorses',(req,res)=>{
    res.send(language)
})

app.get('/allCorses/:id',(req,res)=>{ 
    const id =req.params.id;
    const corse=language.find(lan=> lan.id === id);
    res.send(corse)
    // console.log(corse)


})

app.get('/language/pdf' ,(req,res)=>{
  const Allpdf = language.map(pdf => pdf.urlPdf)
 res.send(Allpdf)

})


app.listen(port ,()=>{
    console.log('The server run 5000 port')
})

