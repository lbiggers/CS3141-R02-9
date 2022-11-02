<?php
  function connectDB()
  {
    $mysqli = mysqli_connect("classdb.it.mtu.edu","rjbunker","g.L5g7P9", "simplyst", 3307);

    if ($mysqli -> connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
      exit();
    }
    echo "Connected Successfully!";
    return $mysqli;
  }
  function getName()
  {
    $conn = connectDB();
    $sql = "SELECT * FROM users WHERE username = 'GreggoWaffle'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        return $row["name"];
      }
    } else {
      echo "0 results";
    }
    $conn->close();
    echo $result;
  }
?>