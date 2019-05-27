var str = navigator.userAgent;
var re = new RegExp("Mobile");

var result = re.test(str);

if(result){
  location.href="https://axcd.github.io/web/0";
}else{
  document.write("<h1>这是一个手机网页</h1>");
}
