const express = require("express"); //express 모델 불러오기 
const app = express();   //app 에 담기
const multer = require("multer"); //multer 모델 불러오기
const mysql = require("mysql"); //mysql 불러오기
const path = require("path"); //path 모델 불러오기
const upload = multer({ //업로드 파일을 지정하고 업로드하기

    storage: multer.diskStorage({
        destination(req, file, done){
            done( null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); //extname 은 파일의 확장자를 가져오겠다는 뜻
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);//basename은 확장자를 뺀 이름
        },
    }),
    limits: { fileSize: 5*1024*1024 }, // 5MB
})
app.set("view engine", "ejs"); //html 파일 불러오기
app.use( '/static', express.static('static'));
app.use( '/uploads', express.static('uploads')); // 접근하기 위해서  /static/img/panda.jpeg 
app.use(express.urlencoded({extended:false}));//데이터를 쉽게 받을 수  있는 라이브러리
app.use(express.json());



const port = 8000; //8000번 포트로 연결
//ip:8000/
app.get("/",(req,res)=>{//다음 주소를 정해주는 문자열 req(request약자)클라이언트가 사버에게    res(restuns)서버가 클라이언트한테 보내는 응답
    res.render("test1"); 
}) 


//파일 업로드 동적 실행
app.post("/upload",upload.single("userfile"),(req,res)=>{ //업로드 주소
    
    console.log(req.body);
    console.log(req.file);
    var datas={
    path: req.file.path,
    body: req.body,
    }
   res.send(datas);

})


// app.get("/get",(req,res)=>{ //get 요청 get 방식     
//     console.log(req.query); //요청 정보
//     res.render("login",{
//         name: req.query.name,
//         gender: req.query.gender,
//         yy: req.query.yy,
//         mm: req.query.mm,
//         dd: req.query.dd,
//         hobby: req.query.hobby
//     });
//     res.render("login");
// })


app.post("/post",(req,res)=>{ //post방식
    console.log(req.body);
    res.render("login",{
        name: req.body.name,
        gender: req.body.gender,
        yy: req.body.yy,
        mm: req.body.mm,
        dd: req.body.dd,
        hobby: req.body.hobby
    });
    res.render("login");
})

app.get("/get/ajax",(req,res)=>{
    console.log(req.query);
    var data = {
        name: req.query.name,
        gender: req.query.gender
    }
    res.send(data);
})
app.get("/get/axios",(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})
app.post("/post/axios",(req,res)=>{
    console.log(req.body);     
    var id="malbong";
    var pass="1234";
    
    if(req.body.name==id && req.body.password==pass){
        res.send("로그인 성공");
    }else{
        res.send("로그인 실패");
    } 
})
// app.get("/test",(req,res)=>{
//     res.render("test1");
// })

// app.get("/b",(req,res)=>{
//     res.render("b");
// })
// app.get("/c",(req,res)=>{
//     res.render("c");
// })
// app.get("/d",(req,res)=>{
//     var person = [
//         {name: "박나래", job: "개그맨",gender:"여"},
//         {name: "김범수", job: "가수",gender:"남"},
//         {name: "박재범", job: "가수",gender:"남"},
//         {name: "하정우", job: "배우",gender:"남"},
//         {name: "전지현", job: "배우",gender:"여"},
//        ]
//     res.render("d",{per: person});
// })


app.listen(port,()=>{
    console.log("server open:",port);
})    //서버를 만드는 코드들



