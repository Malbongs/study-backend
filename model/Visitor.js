
const mysql = require("mysql"); //mysql 모델 불러오기
const cnn = mysql.createConnection({
    host:'localhost',
    user: 'user',
    password: '!wnsus7018',
    database: 'kdt_test'

});


cnn.query('select * from visitor',(err,rows)=>{
    if(err) throw err;
    console.log("visitors: ",rows);
})

//저장된 값 가져오기
exports.get_visitor = () =>{
    return new Promise(function(resolve, reject){
        var sql = 'select * from visitor';
        cnn.query(sql,(err,rows)=>{
            if(err) reject(err);
            console.log("visitors : ", rows);

            resolve(rows);
        })
    })
}


//삭제하기
exports.delete_visitor = (id,cb) =>{
    var sql = `delete from visitor where id = '${id}'`;
    cnn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);

        cb();
    })
}

//get
exports.get_visitor_by_id = (id,cb)=>{
    var sql = `select * from visitor where id = ${id}`;
    cnn.query(sql,(err,rows)=>{
        if(err) throw err;

        cb(rows);
    })
}

//update
exports.update_visitor = (data, cb)=>{

    var sql = `update visitor set name='${data.name}',comment = '${data.comment}' where id = ${data.id}`;
    cnn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        cb();
    })
}


//입력값 집어넣기
exports.post_visitor = (data,cb) =>{
    var sql = `insert into visitor(name,comment) values('${data.name}','${data.comment}')`;
    cnn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log("visitors : ", result);
        
        cb(result.insertId);
    })
}