function outlineTaskButton(){
	let button = document.getElementById('taskButton');
	button.setAttribute('style','border: 2px solid #00A000;');
	button.setAttribute('style','border: 6px solid white;');
	addEventListener('mouseout', (event) => {
		button.setAttribute('style','border: none;');
	});
}
function outlineMenuButton(){
	let button = document.getElementById('menuButton');
	button.setAttribute('style','border: 2px solid #00A000;');
	button.setAttribute('style','border: 6px solid white;');
	addEventListener('mouseout', (event) => {
		button.setAttribute('style','border: none;');
	});
}

function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function changeThemeDefault(){
	let button = document.getElementById('themeButton');
	
        document.documentElement.setAttribute('data-theme', 'root');
     
    toggleSwitch.addEventListener('change', switchTheme, false);
}
function changeThemeTurquoise(){
	let button = document.getElementById('themeButton');
	
        document.documentElement.setAttribute('data-theme', 'turquoise');
     
    toggleSwitch.addEventListener('change', switchTheme, false);
}