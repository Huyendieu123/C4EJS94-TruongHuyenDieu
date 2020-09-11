let obj = {
    project: ["Learn front-end", "Learn front-end", "Learn front-end", "Learn git"],
    task: ["Learn HTML", "Learn CSS", "Lear JS variable and Data type", "Learn Gits Basic"],
    timespent: [6, 8, 6, 2]
};

for (let i = 0; i < obj.project.length; i++) {
    console.log(obj.project[i]);
    console.log(obj.task[i]);
    console.log(obj.timespent[i]);
};

var x = document.getElementById("ts_tbody")
console.log(x);

document.getElementById('addbtn').addEventListener('click', function () {
    var x1 = document.getElementById("project").value;
    var x2 = document.getElementById("Task").value;
    var x3 = document.getElementById("Timespent").value;
    obj.project.push(x1);
    obj.task.push(x2);
    obj.timespent.push(x3);
    var tableRef = document.getElementById('ts_tbody');
    var newRow = tableRef.insertRow(tableRef.rows.length);
    var newCell = newRow.insertCell(0);
    var newTextx1 = document.createTextNode(x1);
    newCell.appendChild(newTextx1);
    var newCell2 = newRow.insertCell(0)
    var newTextx2 = document.createTextNode(x2);
    newCell2.appendChild(newTextx2);
    var newCell3= newRow.insertCell(0)
    var newTextx3 = document.createTextNode(x3);
    newCell3.appendChild(newTextx3);
});