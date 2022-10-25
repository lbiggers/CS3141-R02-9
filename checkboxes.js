var taskCount = 0;

var shownTaskId= ""; 

var taskArray = [];

function newTask(){
	taskDataEntry();
	//showTask();
}

function taskDataEntry(){
	let leftPosition = (screen.width) ? (screen.width-500)/2 : 0;
	let topPosition = (screen.height) ? (screen.height-800)/2 : 0;

	window.open('./taskPopup.html','test','popup,height = 800px,width = 500px,left='+leftPosition+',top='+topPosition);

	/*
	let form = document.createElement('div');
	form.setAttribute('id','newTaskForm');
	form.setAttribute('style', 'width: 328px; background-color: #00A000; float: center;')
	form.innerHTML = `
		<div class='item' id='name'>
			<label id='nameLabel'>Name of task:</label> 
			<input id='nameInput' type='text'>
		</div>
		<div class='item' id='info'>
			<label id='infoLabel'>Description: </label> 
			<input id='infoInput' type='text'>
		</div>
		<div class='item' id='time'>
			<label id='timeLabel'>@ what time: </label> 
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
		<div class='item' id='freq'>
			<label id='freqLabel'>which days:</label> 
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
		<button id='cancel' onclick='window.close()'>Cancel</button>
		<button id='submit' onclick='submit()'>Submit</button>
	`;
	
	document.body.insertBefore(form,document.getElementById('taskButtonBack'));	
	*/
}

function showTask(){
	let taskName = "NAME";
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