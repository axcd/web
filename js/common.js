
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  var x = document.getElementById("d");

  window.outerwidth = screen.availWidth + "px";
  window.outerheight = screen.availHeight + "px";

  //window.alert(x.style.width);
  //window.alert(x.style.height);

  //x.style.width = screen.availWidth + "px";
  //x.style.height = screen.availHeight + "px";

  window.alert(window.outerheight);
  //window.alert(x.style.height);

}
