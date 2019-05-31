
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

x = document.getElementsByTagName('body')[0];
window.alert(x.width);
document.body.clientWidth = screen.width+"px";
document.body.clientHeight = screen.height+"px";

window.alert(document.body.clientWidth+"px");
