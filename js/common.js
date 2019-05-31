
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  document.body.clientWidth = screen.width-2;
  document.body.clientHeight = screen.height-2;

  window.alert(document.body.clientWidth);
  window.alert(document.body.height);

}
