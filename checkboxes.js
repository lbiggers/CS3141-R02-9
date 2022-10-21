let taskCount = 0;
let shownTaskId= ""; 

var taskArray = new Array();
taskArray.push(["TaskID", "Tasks"])
let removeCurr = -1;
function newTask(){
	let taskName = window.prompt("Name this task:","ex: do dishes");
	
	if(taskName != null && taskName != "" && taskName != "ex: do dishes"){
		let taskId = taskArray.length;
		taskArray.push([taskArray.length, taskName]); 
		
		let task = document.createElement('div');
		task.setAttribute('id',taskId);
		task.setAttribute('class','tasks');
		task.setAttribute('onmouseover','showInfo('+taskId+')');
		
		let taskRemove = document.createElement('button');
		taskRemove.setAttribute('id',taskId + "Remove");
		taskRemove.setAttribute('class','tasksRemove');
		taskRemove.setAttribute('onclick','removeTask("'+taskId+'")');
		let bold = document.createElement('b');
		bold.innerText = "x";
		taskRemove.appendChild(bold);
		task.appendChild(taskRemove);
		
		let taskBox = document.createElement('input');
		taskBox.setAttribute('id',taskId + "Box");
		taskBox.setAttribute('class','tasksBox');
		taskBox.setAttribute('type','checkbox');
		taskBox.setAttribute('oninput','checkTask("'+taskId+'")');
		task.appendChild(taskBox);
		
		
		let taskLabel = document.createElement('label');
		taskLabel.setAttribute('id',taskId + "Label");
		taskLabel.setAttribute('class','tasksLabel');
		taskLabel.innerText = taskName;
		task.appendChild(taskLabel);

		let taskInfo = "";
		
		//task.appendChild(document.createElement('br')); 
		//task.appendChild(document.createElement('br'));
		
		document.body.insertBefore(task,document.getElementById('taskButtonBack'));	
	}
	if(taskArray.length == 1){
		table.removeElement()
	}
}

function checkTask(id){
	let task = document.getElementById(id);
	let taskBox = document.getElementById(id + "Box");
	let taskLabel = document.getElementById(id + "Label");
	let taskRemove = document.getElementById(id + "Remove");
	
	if(taskBox.checked){
		window.alert("You did it! You completed task "+taskLabel.innerText+"!!!");
	}
}

function removeTask(id){
	if(window.confirm("Are you sure you want to remove this task?")){
		document.getElementById(id).remove();
		taskArray.pop();
	    generateTable();
		if(taskArray.length[0] == 1){
		table.removeElement()
	   }
	}
}

function showInfo(id) {
	closeInfo();
	shownTaskId = id;

	//todo
}

function closeInfo(){
	if (shownTaskId == ""){
		return;
	}
//todo

}
function generateTable() {

    
    var table = document.createElement("table");
    table.border = "1";
	var columnCount = taskArray[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("th");
        headerCell.innerHTML = taskArray[0][i];
        row.appendChild(headerCell);
        }

        for (var i = 1; i < taskArray.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = taskArray[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
        
}
function arrayRemove(taskid){
	return taskid != removeCurr;
	//TODO use filter maybe?
}