let taskCount = 0;

let shownTaskId= ""; 

const taskArray = [];

class task
{
    constructor(id, name, info, time, frequency)
    {
		this.id = id;
        this.name = name;
        this.info = info;
		
		this.time = time;
		this.frequency = frequency;
    }
	getTime() {
        return this.time;
    }
	getID()
    {
        return this.id;
    }
    getName()
    {
        return this.name;
    }
    getInfo()
    {
        return this.info;
    }
    getType()
    {
        return this.type;
    }
    getFrequency()
    {
        return this.frequency;
    }
    getLastFinished()
    {
        return this.lastFinished;
    }
}

function newTask(){
	//let taskName = window.prompt("Name this task:","ex: do dishes");
	let taskName = "test";
	if(taskName != null && taskName != "" && taskName != "ex: do dishes"){
		

		let taskId = "task" + taskCount;
		
		taskCount++;

		let leftPosition = (screen.width) ? (screen.width-500)/2 : 0;
		let topPosition = (screen.height) ? (screen.height-800)/2 : 0;
		
		popupWindow = window.open('./taskPopup.html','test','popup,height = 800px,width = 500px,left='+leftPosition+',top='+topPosition);

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

		let taskEdit = document.createElement('button');
		taskEdit.setAttribute('id',taskId + "Edit");
		taskEdit.setAttribute('class','tasksEdit');
		taskEdit.setAttribute('onclick','editTask("'+taskId+'")');
		taskEdit.innerText = "edit";
		task.appendChild(taskEdit);
		
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
		
		//task.appendChild(document.createElement('br')); 
		//task.appendChild(document.createElement('br'));
		
		document.body.insertBefore(task,document.getElementById('taskButtonBack'));	
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
	}
}

function editTask(id){
	let index = parseInt(id.slice(4));

	let taskLabel = document.getElementById(id + "Label");

	taskLabel.innerText = window.prompt("What should this task be renamed to?");
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