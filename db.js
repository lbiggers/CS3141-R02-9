function returnedName(input)
{
    document.getElementById("invis").innerHTML = input;
}
function returnedTasks(input)
{
    document.getElementById("invis").innerHTML = input;
}
function getName(username)
{
    getNameRequest(username);
    return document.getElementById("invis").innerHTML;
}
function getNameRequest(username)
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "db.php", false);
    var params = "function=getName&name=GreggoWaffle";
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xhttp.onreadystatechange = function() {//Call a function when the state changes.
         if(xhttp.readyState == 4 && xhttp.status == 200) {
             var foo = xhttp.responseText;
             returnedName(foo);
         }
     }   
     xhttp.send(params);
}
function getTasks(username)
{
    getTasksRequest(username);
    return document.getElementById("invis").innerHTML;
}
function getTasksRequest(username)
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "db.php", false);
    var params = "function=getTasks&name=GreggoWaffle";
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xhttp.onreadystatechange = function() {//Call a function when the state changes.
         if(xhttp.readyState == 4 && xhttp.status == 200) {
             var foo = xhttp.responseText;
             returnedTasks(foo);
         }
     }   
     xhttp.send(params);
}
function getTasksAsTasks(username)
{
    console.log("strIn: ");
}