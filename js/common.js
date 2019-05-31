
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href="https://axcd.github.io/web/403";
};
window.alert(document.body.clientWidth);
document.body.clientWidth = screen.width;
document.body.clientHeight = screen.height;

window.alert(document.body.height);
