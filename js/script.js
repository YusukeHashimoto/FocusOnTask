//alert("ニコニコ動画なんか見てないで研究しなさい");
//location.href="https://scholar.google.co.jp/schhp?hl=ja";
//location.href="chrome/content/tasklist.html";
//location.href="chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tasklist.html";

for(i = 0; i < document.getElementsByTagName("iframe").length; i++) {
    //document.getElementsByTagName("iframe")[i].contentDocument.location.replace('');
    document.getElementsByTagName("iframe")[i].style.display = "none";
}

if(location.href.includes("nicovideo") || location.href.includes("youtube")) {
    //location.href="chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tasklist.html";
    location.href="chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tryAccess.html";
} else {
    //document.write("<iframe id=\"ifrm\" src=\"../tasklist.html\" style=\"display:none\"></iframe>");

    var newNode = document.createElement('iframe');
    newNode.id = "ifrm";
    newNode.src = 'chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tasklist.html';
    newNode.style.display = "none";
    var bodyNode = document.getElementsByTagName('body').item(0);
    bodyNode.appendChild(newNode);

    ifrm = document.getElementById('ifrm').contentWindow;
    ifrm.postMessage("hello from script.js", 'chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tasklist.html');

    var flag = false;
    window.addEventListener('message', function(event) {
	if(!flag) {
	    flg = true;
	    //alert(event.data);
	}
    }, false);
}
