//alert("ニコニコ動画なんか見てないで研究しなさい");
//location.href="https://scholar.google.co.jp/schhp?hl=ja";
//location.href="chrome/content/tasklist.html";
//location.href="chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tasklist.html";

for(i = 0; i < document.getElementsByTagName("iframe").length; i++) {
    //document.getElementsByTagName("iframe")[i].contentDocument.location.replace('');
    document.getElementsByTagName("iframe")[i].style.display = "none";
}

if(location.href.includes("nicovideo") || location.href.includes("youtube")) {
    location.href="chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tasklist.html";
}
