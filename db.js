function returnedName(input)
{
    document.getElementById("name").innerHTML = input;
}
function getName(username)
{
    getNameRequest(username);
    console.log(document.getElementById("name").innerHTML);
    return document.getElementById("name").innerHTML;
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
             alert(foo);
             returnedName(foo);
         }
     }   
     xhttp.send(params);
}
