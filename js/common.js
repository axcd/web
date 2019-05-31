
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href="https://axcd.github.io/web/403";
}

alert("=");

document.body.width=screen.width;
document.body.height=screen.height;
alert(document.body.height);
