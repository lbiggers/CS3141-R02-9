
test1()

function test1()
{
    let task1 = new task("Dusting", "Dust the tv stand", 'D', "TR", 3);
    document.getElementById("name").innerHTML = "Task name: " + task1.getName();
    document.getElementById("info").innerHTML = "Description: " + task1.getInfo();
    document.getElementById("type").innerHTML = "type: " + task1.getType();
    document.getElementById("freq").innerHTML = "frequency: " + task1.getFrequency();
    document.getElementById("doS").innerHTML = "Do Sunday? " + task1.doSunday();
    document.getElementById("doM").innerHTML = "Do Monday? " + task1.doMonday();
    document.getElementById("doT").innerHTML = "Do Tuesday? " + task1.doTuesday();
    document.getElementById("doW").innerHTML = "Do Wednesday? " + task1.doWednesday();
    document.getElementById("doR").innerHTML = "Do Thursday? " + task1.doThursday();
    document.getElementById("doF").innerHTML = "Do Friday? " + task1.doFriday();
    document.getElementById("doZ").innerHTML = "Do Saturday? " + task1.doSaturday();

    
}