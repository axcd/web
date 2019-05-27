
var result = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

if(!result){
  location.href="https://axcd.github.io/web/0";
}

