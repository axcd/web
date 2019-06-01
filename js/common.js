
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  document.body.style.width = (screen.availWidth-4) + "px";
  document.body.style.height = (screen.availHeight-4) + "px";
  
}

function loadLayout(){
 
  var rows = document.getElementsByClassName("row");
  var rowX = screen.availWidth-10;
  var rowY = (screen.availWidth-10)/2+26;
  window.alert(rowX);
  window.alert(rowY);

  for (i = 0; i < rows.lenth; i++) {
    rows[i].style.width = rowX + "px";
    rows[i].style.height = rowY + "px";
  }

  var imgs = document.getElementsByTagName("img");
  var imgX = (screen.availWidth-10)/2-20;
  var imgY = (screen.availWidth-10)/2-20;
  window.alert(imgX);
  window.alert(imgY);

  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.width = imgX + "px";
    imgs[i].style.height = imgY + "px";
  }

}
