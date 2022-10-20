class tasks
{
    constructor()
    {
        this.tasks = []
    }
    addTask(name, info, type, frequency, lastFinished)
    {
        temp = new task(name, info, type, frequency, lastFinished);
        this.tasks.push(temp);
        return temp;
    }
    getTasks ()
    {
        return this.tasks;
    }
    getTask(id)
    {
        return task[id];
    }
    setTask(id, task)
    {
        this.tasks[id] = task; 
    }
}