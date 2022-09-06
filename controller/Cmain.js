const Test = require("../model/Test");
const User = require("../model/User");

exports.main = (req,res) =>{ // exports.함수 로 사용한다.
    res.render("log");
}


exports.log = (req,res)=>{

    var info = User.log();
    console.log(info);
    console.log(req.body);
    
}

// exports.log = (req,res)=>{

//     var info = Test.log();
//     console.log(info);
//     console.log(req.body);
//     if(req.body.id == info.id && req.body.pass == info.pass ){
//         res.send("로그인 성공");
//     }else{
//         res.send("로그인 실패");
//     }
// }
