var express = require("express"); //express 사용
var controller = require("../controller/Cmain");// 점 하나당 상위폴더 이동 결국 node index.js실행시 이 위치로 이동
var controllerV = require("../controller/CVisitor");
var controllerM = require("../controller/CMember");
const router = express.Router(); //express router 사용



// router.get("/",controller.main); //컨트롤러에서 메인 함수를 찾는다.

router.get("/",controllerM.main);
router.get("/log",controllerM.login);
router.get("/my",controllerM.my_page);
router.post("/login",controllerM.login_Form)
router.post("/join/insert",controllerM.join_insert);
router.post("/member/drop",controllerM.member_drop);
router.post("/member/update",controllerM.member_update);


// router.post("/log",controller.log); //컨트롤러에서 log 함수를 찾는다.


router.get("/visitor",controllerV.visitor);

router.post("/visitor/post",controllerV.post_visitor);

router.post("/visitor/drop",controllerV.delete_visitor);

router.post("/visitor/get",controllerV.get_visitor);
router.post("/visitor/update",controllerV.update_visitor);

module.exports = router; 