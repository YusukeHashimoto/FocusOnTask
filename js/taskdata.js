if(localStorage.getItem("mode") == null) {
    localStorage.setItem("mode", "restrict");
}

function addTask() {
    localStorage.setItem(localStorage.length, document.form.title.value);
    localStorage.setItem("d" + (localStorage.length - 1), document.form.date.value);
    alert("added " + document.form.title.value);
    location.reload();
}

var Task = function(id, name, date) {
    this.id = id;
    this.name = name;
    this.date = date;
}

function removeTask(id) {
    localStorage.removeItem("" + id);
    localStorage.removeItem("d" + id);
    location.reload();
}

var tasks;

function loadTask() {
    var taskArray = new Array();
    for(i = 0; i < 100; i++) {
	if(localStorage.getItem("" + i) != null && localStorage.getItem("" + i) != "") {
	    taskArray.push(
		new Task(i, localStorage.getItem("" + i), localStorage.getItem("d" + i)));
	}
    }
    taskArray.sort(function(a, b) {
	if(a.date > b.date) return 1;
	if(a.date < b.date) return -1;
	return 0;
    });
    tasks = taskArray;
    return taskArray;
}

function drawList() {
    var taskArray = loadTask();
    document.write("<p><table border><caption>Task List</caption><tr><th>Task</th><th>date</th><th>done?</th></tr>");
    for(i = 0; i < taskArray.length; i++) {
	document.write("<tr><td>" + taskArray[i].name + "</td><td>" + taskArray[i].date + "</td><td><button type='button' id='" + taskArray[i].id + "'>done</button</td></tr>");
    }
    document.write("</p>");
    for(i = 0; i < taskArray.length; i++) {
	id = taskArray[i].id;
	document.getElementById(taskArray[i].id).onclick = function() {
	    removeTask(id);
	}
    }
}

function restrictMode() {
    localStorage.setItem("mode", "restrict");
}

function regretMode() {
    localStorage.setItem("mode", "regret");
}

document.addEventListener('DOMContentReady', function() {
    alert("hello");
});

drawList();
document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('restrict').addEventListener('click', restrictMode);
document.getElementById('regret').addEventListener('click', regretMode);

date = new Date();
count = localStorage.getItem(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
if(count != null) {
    count = parseInt(count);
} else {
    count = 0;
}
document.write("今日は" + count + "回、制限されたサイトにアクセスしようとしました。");
month = date.getMonth() + 1;
if(month < 10) month = "0" + month;
today = date.getFullYear() + "-" + month + "-" + date.getDate();
document.write("今日は" + localStorage.getItem("stay" + today) + "秒、制限されたサイトを開いていました");

window.addEventListener('message', function(event) {
    event.source.postMessage("hello from taskdata.js", event.origin);
}, false);
