for(i = 0; i < document.getElementsByTagName("iframe").length; i++) {
    document.getElementsByTagName("iframe")[i].style.display = "none";
}

//if(location.href.includes("nicovideo") || location.href.includes("youtube")) {
//制限モードでは下が必要
//location.href="chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tryAccess.html";
/*
  var scriptFrame = document.createElement('iframe');
  scriptFrame.src = 'chrome-extension://mfingehnckgdehpkakfcamencpiojgcd/taskStorage.html';
  var scriptNode = document.createElement('script');
  scriptNode.src = 'chrome-extension://mfingehnckgdehpkakfcamencpiojgcd/js/taskStorage.js';
*/  
var newNode = document.createElement('iframe');
newNode.id = "ifrm";
newNode.src = 'chrome-extension://mfingehnckgdehpkakfcamencpiojgcd/taskStorage.html';
newNode.style.display = "none";
newNode.setAttribute("id", "myframe");
//newNode.setAttribute("onload", "checkURL('" + location.href + "')");
var bodyNode = document.getElementsByTagName('body').item(0);

bodyNode.appendChild(newNode);

//window.onload = function() {
newNode.onload = function() {
    var innerBody = document.createElement('script');
    innerBody.id = "innerBody";
    //innerBody.setAttribute("onload", "checkURL('" + location.href + "')");
    //alert(document.getElementById("hoge"));
    innerBody.innerHTML = "checkURL('" + location.href + "');";
    document.getElementById('myframe').contentWindow.document.getElementById("task").appendChild(innerBody);
}
//bodyNode.appendChild(newNode);

/*
  window.addEventListener("message", function(event) {
  alert(event.data);
  }, false);*/
//}
