//ignore this file for now

const tasks = [];

let taskCount = 0;

class task
{
    constructor(id, name, info, type, time, frequency)
    {
		this.id = id;
        this.name = name;
        this.info = info;
        this.type = type;
                	 
        this.lastFinished = lastFinished;
		
		this.time = time;
		this.frequency = frequency;

		tasks[taskCount++] = this;
    }
	getTime() {
        return this.time;
    }
	getID()
    {
        return this.id;
    }
    getName()
    {
        return this.name;
    }
    getInfo()
    {
        return this.info;
    }
    getType()
    {
        return this.type;
    }
    getFrequency()
    {
        return this.frequency;
    }
    getLastFinished()
    {
         return this.lastFinished;
    }
}