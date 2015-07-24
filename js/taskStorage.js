date = new Date();
var month = date.getMonth() + 1;
if(month < 10) month = "0" + month;
var today = date.getFullYear() + "-" + month + "-" + date.getDate();

function todaysTask() {
    var task = null;
    for(i = 0; i < localStorage.length; i++) {
	task = localStorage.getItem(i);
	if(task != null && task != "" && localStorage.getItem("d" + i) == today) {
	    return task;
	}
    }
    return null;
}

var start = new Date();

//document.referer = "google.com";

if(Math.random() < 0.2 && todaysTask() != null) {
    alert("今日は" + todaysTask() + "を終わらせようね!");
}

window.onbeforeunload = function() {
    stay = localStorage.getItem("stay" + today);
    if(stay != null && stay != "") {
	time = (new Date().getTime() - start.getTime()) / 1000;
	localStorage.setItem("stay" + today, parseInt(stay) + time);
    } else {
	time = (new Date().getTime() - start.getTime()) / 1000;
	localStorage.setItem("stay" + today, time);
    }
}

function restrictedURL(url) {
    for(i = 0; i < 100; i++) {
	restrictedURL = localStorage.getItem("url" + i);
	if(url.includes(restrictedURL)) {
	    var key = "c" + i;
	    if(localStorage.getItem(key) == null)
		localStorage.setItem(key, "0");
	    localStorage.setItem(key,  parseInt(localStorage.getItem(key)) + 1 + "");
	    
	    return true;
	}
    }
    return false;
}

function checkURL(url) {
    if(localStorage.getItem("mode") == "restrict" && url.includes("nicovideo")) {
	//location.href = "http://google.com";
	//location.href = 'chrome-extension://mfingehnckgdehpkakfcamencpiojgcd/tasklist.html';
	/*
	pop = window.open(url).close;
	pop.postMessage("message", url);
*/
    } else if(localStorage.getItem("mode") == "regret" && restrictedURL(url) && todaysTask() != null) {
	todaysStay = parseInt(localStorage.getItem("stay" + today));
	if(todaysStay > 30 * 60) {
	    alert("今日は" + todaysStay + "秒も遊びました.\nそろそろ" + todaysTask() + "を片付けませんか?");
	}
    }
}
