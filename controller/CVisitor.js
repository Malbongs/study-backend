const Visitor = require("../model/Visitor");

//저장된 값 가져오기
exports.visitor = async(req,res) =>{ // exports.함수 로 사용한다.
    var result = await Visitor.get_visitor();
    console.log(result);
    res.render("visitor",{data: result});
}

//저장된 값 집어넣기
exports.post_visitor = (req,res) =>{
    Visitor.post_visitor(req.body,function(result){
        var data = {
            id:result,
            name:req.body.name,
            comment:req.body.comment
        }
        res.send(data);
    })
}

//저장된 값 삭제하기
exports.delete_visitor = (req,res) =>{
    Visitor.delete_visitor(req.body.id,function(){
        res.send("삭제완료");
    })
}

//겟
exports.get_visitor = (req,res)=>{
    Visitor.get_visitor_by_id(req.body.id, function(result){
      if(result.length > 0)  res.send(result[0]);
      else res.send("이상합니다.");
    })
}


//업데이트
exports.update_visitor = (req,res)=>{
    Visitor.update_visitor(req.body, function(){
        res.send(req.body);
    })

}