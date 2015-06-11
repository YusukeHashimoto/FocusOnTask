function addTask() {
    localStorage.setItem(localStorage.length, document.form.title.value);
    localStorage.setItem("d" + (localStorage.length - 1), document.form.date.value);
    alert("added " + document.form.title.value);
    location.reload();
}

function drawList() {
    document.write("<p><table border><caption>Task List</caption><tr><th>Task</th><th>date</th><th>done?</th></tr>");
    for(i = 0; i < localStorage.length; i++) {
	task = localStorage.getItem("" + i);
	if(task != null && task != "") {
	    document.write("<tr><td>" + localStorage.getItem("" + i) + "</td><td>" + localStorage.getItem("d" + i) + "</td><td><button type='button' name='done'" + i + ">done</button</td></tr>");
	}
    }
    document.write("</p>");
}

document.addEventListener('DOMContentReady', function() {
    
    alert("hello");
});
drawList();
document.getElementById('addBtn').addEventListener('click', addTask);
