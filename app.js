const express = require("express"); //express 모델 불러오기 
const app = express();   //app 에 담기
app.set("view engine", "ejs");

const port = 8000; //8000번 포트로 연결
//ip:8000/
app.get("/",(req,res)=>{//다음 주소를 정해주는 문자열 req(request약자)클라이언트가 사버에게    res(restuns)서버가 클라이언트한테 보내는 응답
   res.render("test"); 

}) 

app.listen(port,()=>{
    console.log("server open:",port);
})    //서버를 만드는 코드들



