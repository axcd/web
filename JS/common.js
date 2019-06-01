
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  document.body.style.width = screen.availWidth + "px";
  document.body.style.height = screen.availHeight + "px";
  
}

function load1(){
 
  var o = document.getElementsByClassName("row");
  var rowX = screen.availWidth-10;
  var rowY = screen.availWidth-10;
  o.style.width = x + "px";
  o.style.height = y + "px";

  var o = document.getElementsByClassName("row");
  var dX = screen.availWidth-10;
  var dY = screen.availWidth-10;
  o.style.width = x + "px";
  o.style.height = y + "px";

}
