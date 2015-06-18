for(i = 0; i < document.getElementsByTagName("iframe").length; i++) {
    document.getElementsByTagName("iframe")[i].style.display = "none";
}

if(location.href.includes("nicovideo") || location.href.includes("youtube")) {
    //制限モードでは下が必要
    //location.href="chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tryAccess.html";

    var newNode = document.createElement('iframe');
    newNode.id = "ifrm";
    //newNode.src = 'chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tasklist.html';
    newNode.src = 'chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/taskStorage.html';
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
    //}
}
