date = new Date();
dateString = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
tryCount = localStorage.getItem(dateString);
if(tryCount != null) {
    tryCount = parseInt(tryCount) + 1;
} else {
    tryCount = 1;
}
localStorage.setItem(dateString, tryCount);


location.href = "chrome-extension://chkckjbgpgbeljgecnabkolgniljocnk/tasklist.html";
