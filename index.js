const express = require("express"); //express 모델 불러오기 
const app = express();   //index.js 에 담기
const multer = require("multer"); //multer 모델 불러오기


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
const router = require("./routes");//routers 폴더
app.use('/',router);


const port = 8000; //8000번 포트로 연결
app.listen(port,()=>{
    console.log("server open:",port);
})