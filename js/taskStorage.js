const MAX = 100;
date = new Date();
var month = date.getMonth() + 1;
if(month < 10) month = "0" + month;
var today = date.getFullYear() + "-" + month + "-" + date.getDate();

function todaysTask() {
    var task = null;
    for(i = 0; i < MAX; i++) {
	task = localStorage.getItem(i);
	if(task != null && task != "" && localStorage.getItem("d" + i) == today) {
	    return task;
	}
    }
    return null;
}

var start = new Date();

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
    for(i = 0; i < MAX; i++) {
	restrictedURL = localStorage.getItem("url" + i);
	if(url.includes(restrictedURL)) {
	    var key = "c" + i;
	    if(localStorage.getItem(key) == null || localStorage.getItem(key) == "")
		localStorage.setItem(key, "0");
	    localStorage.setItem(key,  parseInt(localStorage.getItem(key)) + 1 + "");
	    return true;
	}
    }
    return false;
}

function checkURL(url) {
    if(restrictedURL(url) && todaysTask() != null) {
	todaysStay = parseInt(localStorage.getItem("stay" + today));

	if(todaysStay > 30 * 60) {
	    alert("今日は" + parseInt(todaysStay / 60) + "分も遊びました.\nそろそろ" + todaysTask() + "を終わらせませんか?");
	}
    }
}
