var taskCount = 0;

var shownTaskId= ""; 

var taskArray = [];

var data;

function newTask(){
	//let leftPosition = (screen.width) ? (screen.width-500)/2 : 0;
	//let topPosition = (screen.height) ? (screen.height-800)/2 : 0;
	let form = document.createElement('div');
	form.setAttribute('id','formBox');
	
	let formContent = document.createElement('iframe');
	formContent.src="taskPopup.html";
	formContent.height="500px";
	formContent.id = "formIframe";
	form.appendChild(formContent);

	let formButtons = document.createElement('div');
	formButtons.setAttribute('id','formBtnBox');
	formButtons.innerHTML = `
		<button id='formCancelBtn' onclick='formClose()'>Cancel</button>
		<button id='formSubmitBtn' onclick='formSubmit()'>Submit</button>
	`;
	form.appendChild(formButtons);
	
	document.body.insertBefore(form,document.getElementById('taskButtonBack'));	
}

function formClose(){
	document.getElementById('formBox').remove();
}
function formSubmit(){
	//let formRead = document.getElementById("formIframe").contentDocument;
	data = [4];

	var formIframe = document.getElementById('formIframe');
	var innerDoc = (formIframe.contentDocument) ? formIframe.contentDocument : formIframe.contentWindow.document;
	
	data[0] = innerDoc.getElementById('nameInput').value;

	data[1] = innerDoc.getElementById('infoInput').value;

	data[2] = [
		innerDoc.getElementById('timeInputHour').value,
		innerDoc.getElementById('timeInputMinute').value,
		innerDoc.getElementById('timeInputAmPm').value
	];

	data[3] = [
		innerDoc.getElementById('freqSn').checked,
		innerDoc.getElementById('freqMn').checked,
		innerDoc.getElementById('freqTs').checked,
		innerDoc.getElementById('freqWd').checked,
		innerDoc.getElementById('freqTr').checked,
		innerDoc.getElementById('freqFr').checked,
		innerDoc.getElementById('freqSt').checked
	];

	formClose();
	

	showTask(data);
}

function showTask(data){
	let taskName = data[0];
	if(taskName != null && taskName != "" && taskName != "ex: do dishes"){

		let taskId = "task" + taskCount;
		
		taskCount++;

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