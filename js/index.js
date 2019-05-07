$(功能(){
    $("#添加").点击(功能(){
         $.阿贾克斯({
高速缓存: "假的",
类型: "岗",
URL: "http://www.huaba.ml/Home/index/check",
数据: {
名字，姓名: $("#exampleinputemail 1").瓦尔(),
帕斯: $("#exampleinputpassword 1").瓦尔(),
                   },
             成功: 功能 (数据) {
                   如果(数据)=="1"){
                       窗户.位置="http://www.huaba.ml/Home/index/add";
                   }其他{
                       $("#mymode").模态("肘节");
                   }
             },
         });
    });
    $("#BTN").点击 (功能 () {
         窗户.位置="http://www.huaba.ml/Home/index/search/where/"+$("#我的输入").瓦尔();
    });
    $("#登录").点击(功能(){
         $.阿贾克斯({
高速缓存: "假的",
类型: "岗",
URL: "http://www.huaba.ml/Home/index/check",
数据: {
名字，姓名: $("#exampleinputemail 1").瓦尔(),
帕斯: $("#exampleinputpassword 1").瓦尔(),
                   },
             成功: 功能 (数据) {
                   如果(数据)=="1"){
                       窗户.位置="http://www.huaba.ml/Home/index/add";
                   }其他{
                       $("#mymode").模态("肘节");
                   }
             },
         });
    });
})
