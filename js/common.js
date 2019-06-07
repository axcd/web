
var result = /(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i.test(navigator.userAgent);

if(!result){
  location.href = "https://axcd.github.io/web/403";
};

function load(){

  document.body.style.height = (screen.availHeight-50) + "px";
  
}

function loadLayout(){
 
  var rows = document.getElementsByClassName("row");
  var rowX = document.body.scrollWidth;
  var rowY = document.body.scrollWidth/2+26;

  for (i = 0; i < rows.lenth; i++) {
    rows[i].style.width = rowX + "px";
    rows[i].style.height = rowY + "px";
  }

  var imgs = document.getElementsByTagName("img");
  var imgX = document.body.scrollWidth/2-20;
  var imgY = document.body.scrollWidth/2-20;

  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.width = imgX + "px";
    imgs[i].style.height = imgY + "px";
  }

}
