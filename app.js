const express = require("express"); //express 모델 불러오기 
const app = express();   //app 에 담기
app.set("view engine", "ejs"); //html 파일 불러오기
// app.use( express.static('publuic'));  //public/img.panda.jpeg
app.use( '/static', express.static('static')); // 접근하기 위해서  /static/img/panda.jpeg 

const port = 8000; //8000번 포트로 연결
//ip:8000/
app.get("/",(req,res)=>{//다음 주소를 정해주는 문자열 req(request약자)클라이언트가 사버에게    res(restuns)서버가 클라이언트한테 보내는 응답
//    var person = [
//     {name: "박나래", job: "개그맨",gender:"여"},
//     {name: "김범수", job: "가수",gender:"남"},
//     {name: "박재범", job: "가수",gender:"남"},
//     {name: "하정우", job: "배우",gender:"남"},
//     {name: "전지현", job: "배우",gender:"여"},
//    ]
    res.render("a"); 
}) 
// app.get("/test",(req,res)=>{
//     res.render("test1");
// })

app.get("/b",(req,res)=>{
    res.render("b");
})
app.get("/c",(req,res)=>{
    res.render("c");
})
app.get("/d",(req,res)=>{
    var person = [
        {name: "박나래", job: "개그맨",gender:"여"},
        {name: "김범수", job: "가수",gender:"남"},
        {name: "박재범", job: "가수",gender:"남"},
        {name: "하정우", job: "배우",gender:"남"},
        {name: "전지현", job: "배우",gender:"여"},
       ]
    res.render("d",{per: person});
})



app.listen(port,()=>{
    console.log("server open:",port);
})    //서버를 만드는 코드들



