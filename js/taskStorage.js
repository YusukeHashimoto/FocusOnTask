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

document.referer = "google.com";

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

