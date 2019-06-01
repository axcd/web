
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  document.body.style.width = screen.availWidth + "px";
  document.body.style.height = screen.availHeight + "px";
  
}

function load1(){
 
  var rows = document.getElementsByClassName("row");
  var rowX = screen.availWidth-10;
  var rowY = (screen.availWidth-10)/2-20;
  for (i = 0; i < rows.lenth; i++) {
    row.style.width = rowX + "px";
    row.style.height = rowY + "px";
  }
  var img = document.getElementsByClassName("img");
  var imgX = (screen.availWidth-10)/2-20;
  var imgY = (screen.availWidth-10)/2-20;
  img.style.width = imgX + "px";
  img.style.height = imgY + "px";

}
