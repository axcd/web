
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  var x = document.getElementById("d");

  x.style.width = screen.availWidth;
  x.style.height = screen.availHeight;
  window.alert(document.body.style.width);

}
