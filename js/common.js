
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  document.body.style.width = screen.width;
  document.body.style.height = screen.height;

  window.alert(document.body.style.width);
  window.alert(document.body.clientHeight);
  window.alert(screen.heiht);

}
