<?php 
    session_start();
    require "db.php";
?>
<!DOCTYPE html>
<html>
<head>
	<script src='checkboxes.js'></script>
	<script src='pretty.js'></script>
	<link rel="stylesheet" href="style.css">
    <?php
        getName();
    ?>
</head>
<body>
	<div id='taskButtonBack' style='border: 4px solid #00a000;width: 320px;'>
		<button type='button' id='taskButton' onclick='newTask()' onmouseover='outlineTaskButton()'>New Task</button>
	</div>
	<button id='tmpBtn' onclick='debugTaskAlert()'></button>
</body>
</html>