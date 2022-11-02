<?php 
require "db.php";
session_start();

if (isset($_POST["login"]))
{
    if (authenticate($_POST["username"], $_POST["password"]) == 0)
    {
        $_SESSION["username"] = $_POST["username"];
        header("LOCATION:studentView.php");
        return;
    }
    else if (authenticate($_POST["username"], $_POST["password"]) == 1)
    {   
        $_SESSION["username"] = $_POST["username"];
        header("LOCATION:instructorView.php");
        return;
    }else if (authenticate($_POST["username"], $_POST["password"]) == 2)
    {
        $_SESSION["username"] = $_POST["username"];
        header("LOCATION:resetPass.php");
        return;
    }
    else{
        echo '<p style ="color:red">incorrect username and password</p>';
    }

    if (isset($_POST["logout"]))
    {
        session_destroy();
    }
}
?>

<body>

<form method=post action="login.php">
username: <input type="text" id = "username" name="username"><br>
password: <input type="text" id = "username" name="password"><br>
<input type="submit"  name = "login" value="login">
</form>

</body>
