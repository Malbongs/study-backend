const mysql = require("mysql"); //mysql 모델 불러오기
const cnn = mysql.createConnection({
    host:'localhost',
    user: 'user',
    password: '!wnsus7018',
    database: 'kdt_test'

});


//입력값 집어넣기
exports.insert_md = (data) =>{
    return new Promise(function(resolve,reject){
        var sql = `insert into mb values('${data.id}','${data.name}','${data.password}','${data.nickname}','${data.birthday}')`;
        cnn.query(sql,(err,result)=>{
            if(err) reject(err);
            resolve();
        })
    })
   
}

//저장된 정보 가져오기

exports.get_all = (id) =>{
    return new Promise(function(resolve,reject){
        var sql = `select * from mb where id = '${id}'`;
        cnn.query(sql,(err,result)=>{
            if(err) reject(err);
            console.log("visitors : ", result);
            resolve(result);
        })
    })   
}

//로그인
exports.get_mb = (data) =>{
    return new Promise(function(resolve,reject){
        var sql = `select * from mb where id = '${data.id}' and password = '${data.pass}'`;
        cnn.query(sql,(err,result)=>{
            if(err) reject(err);
            console.log("mb : ",result);
            resolve(result);
        })
    })
   
}
//삭제
exports.drop = (id) =>{
    return new Promise(function(resolve,reject){
        var sql = `delete from mb where id = '${id}'`;
        cnn.query(sql,(err,result)=>{
            if(err) reject(err);
            console.log(result);
            resolve();
        })
    })
}

//수정
exports.update = (data,cb) =>{
    return new Promise(function(resolve,reject){
        var sql = `update mb set password='${data.pass}', nickname = '${data.nickname}' where id = '${data.id}'`;
        cnn.query(sql,(err,result)=>{
            if(err) reject(err);
            console.log(result);
            resolve();
         })
    })

}