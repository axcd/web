$(function(){
    $("#add").click(function(){
         $.ajax({
             cache: "false",
             type: "POST",
             url: "http://www.huaba.ml/Home/index/check",
             data: {
                      name: $("#exampleinputemail1").val(),
                      passwd: $("#exampleinputpassword1").val(),
                   },
             success: function (data) {
                   if(data=="1"){
                       window.location="http://www.huaba.ml/Home/index/add";
                   }else{
                       $("#mymodal").modal("toggle");
                   }
             },
         });
    });
    $("#btn").click (function () {
         window.location="http://www.huaba.ml/Home/index/search/where/"+$("#myinput").val();
    });
    $("#login").click(function(){
         $.ajax({
             cache: "false",
             type: "POST",
             url: "http://www.huaba.ml/Home/index/check",
             data: {
                      name: $("#exampleinputemail1").val(),
                      passwd: $("#exampleinputpassword1").val(),
                   },
             success: function (data) {
                   if(data=="1"){
                       window.location="http://www.huaba.ml/Home/index/add";
                   }else{
                       $("#mymodal").modal("toggle");
                   }
             },
         });
    });
})