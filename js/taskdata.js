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
    alert("お疲れさま!");
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

function countAccess() {
    var c = 0;
    for(i = 0; i < 100; i++) {
	n = localStorage.getItem("c" + i);
	if(n != null) {
	    c += parseInt(n);
	}
    }
    return c;
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

function addURL() {
    localStorage.setItem("url" + localStorage.length, document.form.url.value);
    location.reload();
}

document.addEventListener('DOMContentReady', function() {
    alert("hello");
});

drawList();
document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('restrict').addEventListener('click', restrictMode);
document.getElementById('regret').addEventListener('click', regretMode);
document.getElementById('urlBtn').addEventListener('click', addURL);

date = new Date();
count = localStorage.getItem(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
if(count != null) {
    count = parseInt(count);
} else {
    count = 0;
}
//document.write("今日は" + countAccess() + "回、遊びサイトにアクセスし、");
month = date.getMonth() + 1;
if(month < 10) month = "0" + month;
today = date.getFullYear() + "-" + month + "-" + date.getDate();
var count = localStorage.getItem("stay" + today);
document.write("今日は" + parseInt(count/60) + "分" + parseInt(count%60) + "秒遊びサイトを開いていました");

window.addEventListener('message', function(event) {
    event.source.postMessage("hello from taskdata.js", event.origin);
}, false);

function drawChart() {
    colors = [
	"#F7464A", "#46BFBD", "#FDB45C"
    ];
    heighlights = [
	"#FF5A5E", "#5AD3D1", "#FDB45C"
    ];
    var ctx = document.getElementById("myChart").getContext("2d");
    
    var array = new Array();
    
    for(i = 0, j = 0; i < 100; i++) {
	url = localStorage.getItem("url" + i);
	if(url != null) {
	    array.push({
		value: parseInt(localStorage.getItem("c" + i)),
		color: colors[j % 3],
		heighlight: heighlights[j % 3],
		label: url
	    });
	    j++;
	}
    }
    /*n
    var chart_option = {
	legendTemplate : "<% for (var i=0; i<datasets.length; i++){%><li><span style=\"color:<%=datasets[i].strokeColor%>\">■</span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%>"
};*/

    var pieChart = new Chart(ctx).Pie(array);
}

function drawURLList() {
    var URLs = new Array();
    var counts = new Array();
    for(i = 0; i < 100; i++) {
	url = localStorage.getItem("url" + i);
	if(url != null) {
	    URLs.push(url);
	    counts.push(localStorage.getItem("c" + i));
	}
    }
    var sum = countAccess();
    document.write("<p><table border><caption>URL List</caption><tr><th>URL</th><th>%</th></tr>");
    for(i = 0; i < URLs.length; i++) {
	document.write("<tr><td>" + URLs[i] + "</td><td>" + parseInt((counts[i] / sum) * 100) + "%</td><td><button type='button' id='" + i + "'>delete</button</td></tr>");
    }
    document.write("</p>");/*
    for(i = 0; i < taskArray.length; i++) {
	id = taskArray[i].id;
	document.getElementById(taskArray[i].id).onclick = function() {
	    removeTask(id);
	}
    }*/
}

drawChart();
drawURLList();
