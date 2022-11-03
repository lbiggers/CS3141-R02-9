<?php
require "db.php";
$table = getTasks("GreggoWaffle");
?>

<!DOCTYPE html>
<html>
<header>

    <h1 id = "greeting"></h1>
</header>
<body>
    <p id = "name"></p>
<table>
  <tr>
    <th>Name</th>
    <th>Info</th>
    <th>Task Time</th>
    <th>Frequency</th>
  </tr>
  <?php 
    if ($table->num_rows > 0) {
        ?> <tr> <?php 
        while($row = $table->fetch_assoc()) {
            ?> <td> <?php
            echo $row["name"];
            ?> </td> <td> <?php
            echo $row["info"];
            ?> </td> <td> <?php
            echo $row["taskTime"];
            ?> </td> <td> <?php
            echo $row["frequency"];
            ?> </td> </tr><?php
        }
      }
  ?>
</table>
    <script src="db.js"></script>
    <script>
        //getNameRequest("GreggoWaffle");
        document.getElementById("greeting").innerHTML = "Hello " + getName("GreggoWaffle") + "!";
    </script>
</html>