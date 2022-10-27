function submit(){

	let data = [4];
/*
0 - name
1 - info
2 - time array
3 - freq array
*/

	data[0] = document.getElementById('nameInput').value;

	data[1] = document.getElementById('infoInput').value;

	data[2] = [
		document.getElementById('timeInputHour').value,
		document.getElementById('timeInputMinute').value,
		document.getElementById('timeInputAmPm').value
	];

	data[3] = [
		document.getElementById('freqSn').checked,
		document.getElementById('freqMn').checked,
		document.getElementById('freqTs').checked,
		document.getElementById('freqWd').checked,
		document.getElementById('freqTr').checked,
		document.getElementById('freqFr').checked,
		document.getElementById('freqSt').checked
	];
}