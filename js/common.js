
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  document.body.style.width = screen.availWidth + "px";
  document.body.style.height = screen.availHeight + "px";
  
}

function load1(){
 
  var o = document.getElementsByClassName("");
  var x = screen.availWidth/2-12;
  var y = x;
  o.style.width = x + "px";
  o.style.height = y + "px";

}
