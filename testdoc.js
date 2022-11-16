
test1()
test2()
test3()
test4()
test5()

/**
 *  Adds a task to the list and checks that it was made
 */
function test1()
{
    let list = new tasks();
    list.addTask("Dusting", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    var taskList = list.getTasks();
    var task1 = taskList[0];
    document.getElementById("name1").innerHTML = "Task name: " + task1.getName();
    document.getElementById("info1").innerHTML = "Description: " + task1.getInfo();
    document.getElementById("time1").innerHTML = "Time: " + task1.getTime();
    document.getElementById("freq1").innerHTML = "Frequency: " + task1.getFrequency();
    document.getElementById("expd1").innerHTML = "Expire Date: " + task1.getExpireDate();
}

/**
 *  Adds several tasks to the list and displays the names of the tasks in order
 */
 function test2()
 {
    let list = new tasks();
    list.addTask("Dusting", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    list.addTask("Eating", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    list.addTask("Be a epic gamer", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    list.addTask("Cleaning", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");

    var listNames = "";

    for (let i = 0; i < list.length(); i++)
    {
        listNames = listNames + list.getTask(i).getName() + ", "
    }

    document.getElementById("list2").innerHTML = "List of tasks: " + listNames;
 }  

 /**
 *  Adds several tasks to the list and displays the names of the tasks in order
 */
  function test3()
  {
    let list = new tasks();
    list.addTask("Dusting", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    list.addTask("Eating", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    list.addTask("Be a epic gamer", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    list.addTask("Cleaning", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    
 
    var listNames = "";

    for (let i = 0; i < list.length(); i++)
    {
        listNames = listNames + list.getTask(i).getName() + ", "
    }
    document.getElementById("prelist3").innerHTML = "List before removal: " + listNames;

    list.removeTask(2)

    listNames = "";
    for (let i = 0; i < list.length(); i++)
    {
        listNames = listNames + list.getTask(i).getName() + ", "
    }
    document.getElementById("postlist3").innerHTML = "List after removal: " + listNames;

}

/**
 * Generating a savestring from task list
 */
function test4()
  {
    let list = new tasks();
    list.addTask("Dusting", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    list.addTask("Eating", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    list.addTask("Be a epic gamer", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");
    list.addTask("Cleaning", "Dust the TV stand", "3:00:00", "TR", "3/14/2023");

    document.getElementById("save4").innerHTML = "Save String: " + list.toString();
  }  

/**
 * Generating a task list from a save String
 */
 function test5()
 {
    var saveString = "Dusting-Dust the TV stand-3:00:00-TR-3/14/2023?Eating-Dust the TV stand-3:00:00-TR-3/14/2023?Be a epic gamer-Dust the TV stand-3:00:00-TR-3/14/2023?Cleaning-Dust the TV stand-3:00:00-TR-3/14/2023?";
    let list = new tasks();
    list.fromSaveString(saveString)
    
    var listNames = "";
    for (let i = 0; i < list.length(); i++)
    {
        listNames = listNames + list.getTask(i).getName() + ", "
    }
    document.getElementById("save5").innerHTML = "Save String: " + saveString;
    document.getElementById("names5").innerHTML = "Generated names: " + listNames;
 }  
