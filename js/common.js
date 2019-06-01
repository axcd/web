
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  var x = document.getElementById("d");

  window.alert(x.style.width);
  window.alert(x.style.height);

  x.style.width = screen.availWidth;
  x.style.height = screen.availHeight;

  window.alert(x.style.width);
  window.alert(x.style.height);

}
