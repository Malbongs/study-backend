const Member = require("../model/Member");


exports.main = (req,res) =>{ // exports.함수 로 사용한다.
    res.render("join");
}
exports.login = (req,res) =>{ // exports.함수 로 사용한다.
    res.render("log");
}

//회원가입
exports.join_insert = async(req,res) =>{
    var result = Member.insert_md(req.body);
         var data = {
            id: req.body.id,
            name: req.body.name,
            password: req.body.password,
            nickname: req.body.nickname,
            birthday: req.body.birthday
        }
        console.log(data);
        res.send("성공");
}
//로그인
exports.login_Form = async(req,res) =>{
    var result = await Member.get_mb(req.body);
    console.log(req.body);
    if(result.length > 0)  res.send("로그인 성공");
    else res.send("로그인 실패");
}

//저장된 값 가져오기
exports.my_page = async(req,res) =>{ // exports.함수 로 사용한다.
    var result =  await Member.get_all(req.query.id);
    if(result.length > 0)   res.render("my",{data: result[0]});
    else res.send("일치하는 회원이 없습니다.");
}


//삭제
exports.member_drop = async(req,res) =>{
    var result = await Member.drop(req.body.id);
    console.log(req.body.id);
    res.send("회원탈퇴 완료");

}

//수정
exports.member_update = async(req,res)=>{
    var result = await Member.update(req.body);
        res.send("수정완료");
}