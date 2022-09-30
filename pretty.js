function outlineTaskButton(){
	let button = document.getElementById('taskButton');
	button.setAttribute('style','border: 2px solid #00A000;');
	button.setAttribute('style','border: 6px solid white;');
	addEventListener('mouseout', (event) => {
		button.setAttribute('style','border: none;');
	});
}