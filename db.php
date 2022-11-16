
<?php
  error_reporting (E_ALL ^ E_NOTICE);
  function connectDB()
  {
    $mysqli = mysqli_connect("classdb.it.mtu.edu","simplyst_rw","S!mp1yst", "simplyst", 3307);

    if ($mysqli -> connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
      exit();
    }
    return $mysqli;
  }
  function getName($user)
  {
    $conn = connectDB();

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $user);
    $stmt->execute();
    $result = $stmt->get_result();
   
    $row = $result->fetch_assoc();
    $conn->close();
    return $row["name"];
  }
  function getTasks($user)
  {
    $conn = connectDB();

    $stmt = $conn->prepare("SELECT * FROM tasks WHERE user = ?");
    $stmt->bind_param("s", $user);
    $stmt->execute();
    $result = $stmt->get_result();
    $conn->close();

    $output = "";
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          $output = $output.$row["name"]."|".$row["info"]."|".$row["frequency"]."|".$row["taskTime"]."|".$row["expireDate"].";";
        }
    } else {
      return "-1";
    }
    return $output;
  }
  function authenticate()
  {
    
  }

  $function = $_POST['function'];
  $name= $_POST['name'];

  if ($function == "getName")
  {
      echo getName($name);
  }
  if ($function == "getTasks")
  {
      echo getTasks($name);
  }
?>