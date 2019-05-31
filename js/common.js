
window.alert(screen.width);

var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href="https://axcd.github.io/web/403";
};

document.body.width=screen.width;
document.body.height=screen.height;
window.alert(document.body.height);
