class task
{
    constructor(name, info, time, frequency, expireDate)
    {
        this.name = name;   //Display name of task
        this.info = info; 
        this.time = time;                  
        this.frequency = frequency;
        this.expireDate = expireDate;
    }
    getName()
    {
        return this.name;
    }
    getInfo()
    {
        return this.info;
    }
    getTime()
    {
        return this.time;
    }
    getFrequency()
    {
        return this.frequency;
    }
    getExpireDate()
    {
        return this.expireDate;
    }
    setName(newName)
    {
        this.name = newName
    }
    setInfo(newInfo)
    {
        this.info = newInfo
    }
    setTime(newTime)
    {
        this.time = newTime;
    }
    setFrequency(newFreq)
    {
        this.frequency = newFreq
    }
    setExpireDate(newExp)
    {
        this.expireDate = newExp
    }
} 
class tasks
{
    constructor()
    {
        this.tasks = []
    }
    fromSaveString(saveString)
    {
        this.tasks = [];

        var listTasks =  saveString.split("?");
        for (let i = 0; i < listTasks.length - 1; i++)
        {
            var taskData = listTasks[i].split("-")
            if (taskData.length != 5)
            {
                console.log("Invalid task on index: " + i)
                for (let j = 0; j < taskData.length; j++)
                {
                    console.log(taskData[j])
                }
                return -1;
            }
            this.tasks[i] = new task(taskData[0], taskData[1], taskData[2], taskData[3], taskData[4]);
        }
    }
    addTask(name, info, time, frequency, expireDate)
    {
        var temp = new task(name, info, time, frequency, expireDate);
        this.tasks.push(temp);
        return temp;
    }
    length()
    {
        return this.tasks.length;
    }
    getTask(id)
    {
        return this.tasks[id];
    }
    replaceTask(id, name, info, time, frequency, expireDate)
    {
        this.tasks[id] = new task(name, info, time, frequency, expireDate);
    }
    removeTask(id)
    {
        this.tasks.splice(id, 1)
    }
    toString()
    {
        var outString = "";
        for(let i = 0; i < this.tasks.length; i++)
        {
            outString = outString +
            this.tasks[i].getName() + "-" +
            this.tasks[i].getInfo() + "-" +
            this.tasks[i].getTime() + "-" +
            this.tasks[i].getFrequency() + "-" +
            this.tasks[i].getExpireDate() + '?';
        }
        return outString;
    }
}