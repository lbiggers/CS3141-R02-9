<?php
  $mysqli = mysqli_connect("classdb.it.mtu.edu","rjbunker","g.L5g7P9", "simplyst", 3307);
                        //        Host Name    ,   username  , password ,  db name

// Check connection
  if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }
  echo "Connected Successfully!";
  $mysqli->close();
?>