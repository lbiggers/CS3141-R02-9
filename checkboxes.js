
var taskCount = 0;

var shownTaskId= ""; 

var taskSet = new tasks();

var col1 = 3;
var col2 = 3;
var col3 = 3;

function newTask(){
	let form = document.createElement('div');
	form.setAttribute('id','formBox');
	form.setAttribute('style', 'grid-column: 4; grid-row-start: 2; grid-row-end: 10');
	
	let formContent = document.createElement('iframe');
	try {
		formContent.srcdoc = 
`<html>
	<head>
		<style>
			body{
				background-color: #555555;
			}
			.item {
				padding-bottom: 5px;
				background-color: #555555;
				color: white;
			}
		</style>
	</head>
	<body>
		<div class='item' id='name'>
			<label id='nameLabel'>Task:</label> 
			<input id='nameInput' type='text'>
		</div>
		<div class='item' id='info'>
			<label id='infoLabel'>Description: </label> 
			<input id='infoInput' type='text'>
		</div>
		<div class='item' id='time'>
			<label id='timeLabel'>Time: </label> 
			<select id='timeInputHour'>
				<option value='12'>12</option>
				<option value='11'>11</option>
				<option value='10'>10</option>
				<option value='9'>9</option>
				<option value='8'>8</option>
				<option value='7'>7</option>
				<option value='6'>6</option>
				<option value='5'>5</option>
				<option value='4'>4</option>
				<option value='3'>3</option>
				<option value='2'>2</option>
				<option value='1'>1</option>
			</select>
			<label>:</label>
			<select id='timeInputMinute'>
				<option value='0'>00</option>
				<option value='1'>01</option>
				<option value='2'>02</option>
				<option value='3'>03</option>
				<option value='4'>04</option>
				<option value='5'>05</option>
				<option value='6'>06</option>
				<option value='7'>07</option>
				<option value='8'>08</option>
				<option value='9'>09</option>
				<option value='10'>10</option>
				<option value='11'>11</option>
				<option value='12'>12</option>
				<option value='13'>13</option>
				<option value='14'>14</option>
				<option value='15'>15</option>
				<option value='16'>16</option>
				<option value='17'>17</option>
				<option value='18'>18</option>
				<option value='19'>19</option>
				<option value='20'>20</option>
				<option value='21'>21</option>
				<option value='22'>22</option>
				<option value='23'>23</option>
				<option value='24'>24</option>
				<option value='25'>25</option>
				<option value='26'>26</option>
				<option value='27'>27</option>
				<option value='28'>28</option>
				<option value='29'>29</option>
				<option value='30'>30</option>
				<option value='31'>31</option>
				<option value='32'>32</option>
				<option value='33'>33</option>
				<option value='34'>34</option>
				<option value='35'>35</option>
				<option value='36'>36</option>
				<option value='37'>37</option>
				<option value='38'>38</option>
				<option value='39'>39</option>
				<option value='40'>40</option>
				<option value='41'>41</option>
				<option value='42'>42</option>
				<option value='43'>43</option>
				<option value='44'>44</option>
				<option value='45'>45</option>
				<option value='46'>46</option>
				<option value='47'>47</option>
				<option value='48'>48</option>
				<option value='49'>49</option>
				<option value='50'>50</option>
				<option value='51'>51</option>
				<option value='52'>52</option>
				<option value='53'>53</option>
				<option value='54'>54</option>
				<option value='55'>55</option>
				<option value='56'>56</option>
				<option value='57'>57</option>
				<option value='58'>58</option>
				<option value='59'>59</option>
			</select>
			<select id='timeInputAmPm'>
				<option value='0'>AM</option>
				<option value='1'>PM</option>
			</select>
		</div>
		<div class='item' id='date'>
			<label id='dateLabel'>on what date: </label> 
			<select id='dateInputMonth'>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
				<option value='7'>7</option>
				<option value='8'>8</option>
				<option value='9'>9</option>
				<option value='10'>10</option>
				<option value='11'>11</option>
				<option value='12'>12</option>
			</select>
			<label>/</label>
			<select id='dateInputDay'>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
				<option value='7'>7</option>
				<option value='8'>8</option>
				<option value='9'>9</option>
				<option value='10'>10</option>
				<option value='11'>11</option>
				<option value='12'>12</option>
				<option value='13'>13</option>
				<option value='14'>14</option>
				<option value='15'>15</option>
				<option value='16'>16</option>
				<option value='17'>17</option>
				<option value='18'>18</option>
				<option value='19'>19</option>
				<option value='20'>20</option>
				<option value='21'>21</option>
				<option value='22'>22</option>
				<option value='23'>23</option>
				<option value='24'>24</option>
				<option value='25'>25</option>
				<option value='26'>26</option>
				<option value='27'>27</option>
				<option value='28'>28</option>
				<option value='29'>29</option>
				<option value='30'>30</option>
				<option value='31'>31</option>
			</select>
			<label>/</label>
			<select id='dateInputYear'>
				<option value='2022'>2022</option>
				<option value='2023'>2023</option>
				<option value='2024'>2024</option>
				<option value='2025'>2025</option>
				<option value='2026'>2026</option>
				<option value='2027'>2027</option>
				<option value='2028'>2028</option>
				<option value='2029'>2029</option>
			</select>
		</div>
		<div class='item' id='freq'>
			<label id='freqLabel'>Days:</label> 
			<br>
			<table>
				<tr>
					<th>S</th>
					<th>M</th>
					<th>T</th>
					<th>W</th>
					<th>T</th>
					<th>F</th>
					<th>S</th>
				</tr>
				<tr>
					<td>
						<input id='freqSn' type='checkbox'>
					</td>
					<td>
						<input id='freqMn' type='checkbox'>
					</td>
					<td>
						<input id='freqTs' type='checkbox'>
					</td>
					<td>
						<input id='freqWd' type='checkbox'>
					</td>
					<td>
						<input id='freqTr' type='checkbox'>
					</td>
					<td>
						<input id='freqFr' type='checkbox'>
					</td>
					<td>
						<input id='freqSt' type='checkbox'>
					</td>
				</tr>
			</table>
		</div>
	</body>
</html>`
		;
	} catch(wePlannedForThis){
		formContent.src = "newTaskForm.html"
	}
	
	formContent.height="190px";
	formContent.id = "formIframe";
	form.appendChild(formContent);

	let formButtons = document.createElement('div');
	formButtons.setAttribute('id','formBtnBox');
	formButtons.innerHTML = 
`<button id='formCancelBtn' onclick='formClose()'>Cancel</button>
<button id='formSubmitBtn' onclick='formSubmit()'>Submit</button>`
	;
	form.appendChild(formButtons);
	
	//document.body.insertBefore(form,document.getElementById('taskButtonBack'));	
	document.getElementById("container").appendChild(form);
}

function formClose(){
	document.getElementById('formBox').remove();
}
function formSubmit(){
	var data = [5];

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

	data[4] = [
		innerDoc.getElementById('dateInputMonth').value,
		innerDoc.getElementById('dateInputDay').value,
		innerDoc.getElementById('dateInputYear').value
	];


	let valid = validate(data);
	if(valid[0]) {
		taskSet.addTask(data[0],data[1],data[2],data[3],data[4]);
		
		formClose(); 
		showTask(data);
		return;
	}
	
	let errMsg = '';
	for(let i = 1; i < valid.length; i++){
		errMsg += valid[i] + "\n";
	}
	window.alert(errMsg);
}

function validate(data){
	var validityReport = [true,"valid"];
	let errorCount = 0;

	if(data.length != 5){
		validityReport[0] = false;
		validityReport[++errorCount] = "Bad array size, but like how tho??";
	}
	if(data[0] == ""){
		validityReport[0] = false;
		validityReport[++errorCount] = "You need a name for your task!";
	}
	if(data[2].length != 3){
		validityReport[0] = false;
		validityReport[++errorCount] = "Bad time array";
	}	
	if(parseInt(data[2][0]) > 12 || parseInt(data[2][0]) < 0){
		validityReport[0] = false;
		validityReport[++errorCount] = "Bad hours";
	}
	if(parseInt(data[2][1]) > 59 || parseInt(data[2][1]) < 0){
		validityReport[0] = false;
		validityReport[++errorCount] = "Bad minutes";
	}
	if(!(parseInt(data[2][2]) == 0 || parseInt(data[2][2]) == 1)){
		validityReport[0] = false;
		validityReport[++errorCount] = "Bad am/pm";
	}
	try {
		for(let i = 0; i < 7; i++){
			if(typeof data[3][0] != "boolean"){
				validityReport[0] = false;
				validityReport[++errorCount] = "Bad weekday array";
			}
			if(validityReport[0] == false){
				break;
			}
		}
		
	} catch(error) {
		validityReport[0] = false;
		validityReport[++errorCount] = "Bad minutes";
	}

	return validityReport;
}

function showTask(data){

	let taskName = data[0];

	let taskIdString = "task" + data[4];

	var rowCount = taskCount+2;
	
	let task = document.createElement('div');
	task.setAttribute('style', 'grid-row:' +rowCount);
	task.setAttribute('id',taskIdString);
	task.setAttribute('class','tasks');
	task.setAttribute('onmouseover','showInfo('+taskIdString+')');
	
	let taskRemove = document.createElement('button');
	taskRemove.setAttribute('id',taskIdString + "Remove");
	taskRemove.setAttribute('class','tasksRemove');
	taskRemove.setAttribute('onclick','removeTask("'+taskIdString+'")');
	let bold = document.createElement('b');
	bold.innerText = "x";
	taskRemove.appendChild(bold);
	task.appendChild(taskRemove);

	let taskEdit = document.createElement('button');
	taskEdit.setAttribute('id',taskIdString + "Edit");
	taskEdit.setAttribute('class','tasksEdit');
	taskEdit.setAttribute('onclick','editTask("'+taskIdString+'")');
	taskEdit.innerText = "edit";
	task.appendChild(taskEdit);
	
	let taskBox = document.createElement('input');
	taskBox.setAttribute('id',taskIdString + "Box");
	taskBox.setAttribute('class','tasksBox');
	taskBox.setAttribute('type','checkbox');
	taskBox.setAttribute('oninput','checkTask("'+taskIdString+'")');
	task.appendChild(taskBox);

	const date = new Date();
	 yea = date.getFullYear();
	
	let taskLabel = document.createElement('label');
	taskLabel.setAttribute('id',taskIdString + "Label" + data[3]);
	taskLabel.setAttribute('class','tasksLabel');
	taskLabel.innerText = taskName;
	task.appendChild(taskLabel);

	

	if(data[4][0] == (date.getMonth() + 1) && data[4][1] == date.getDate() && data[4][2] == date.getFullYear()){
		task.setAttribute('style', 'grid-column: 1; grid-row:' +col1);
		col1++;
	}
	
	else if( data[3][date.getDay()] == true){
		task.setAttribute('style', 'grid-column: 1; grid-row:' +col1);
		col1++;
	}
	else if(data[4][0] == 1 && data[4][1] == 1 && data[4][2] == 2022 && data[3][0] == false && data[3][1] == false && data[3][2] == false && data[3][3] == false && data[3][4] == false && data[3][5] == false && data[3][6] == false) {
		task.setAttribute('style', 'grid-column: 3; grid-row:' +col3);
		col3++;
	}
	else{
		task.setAttribute('style', 'grid-column: 2; grid-row:' +col2);
		col2++;
	}
	
	document.getElementById("container").appendChild(task);	
	//document.body.insertBefore(task,document.getElementById('taskButtonBack'));	
}


function debugTaskAlert(){
	let testTaskData = taskArray[taskCount-1];

	let ampm = (parseInt(testTaskData[2][2]) == 0) ? 'am' : 'pm';
	let minute = (parseInt(testTaskData[2][1]) < 10) ? ("0" + testTaskData[2][1]) : testTaskData[2][1];

	let daysTest = [7];
	for(let i = 0; i < 7; i++){
		daysTest[i] = (testTaskData[3][i]) ? 'X' : 'O';
	}

	window.alert(`
name: `+testTaskData[0]+`
desc: `+testTaskData[1]+`
time: `+ testTaskData[2][0] +`:`+ minute +` `+ ampm +`
days: ` + daysTest[0] + daysTest[1] + daysTest[2] + daysTest[3] + daysTest[4] + daysTest[5] + daysTest[6]
	);
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

}

function closeInfo(){
	if (shownTaskId == ""){
		return;
	}
//todo

}