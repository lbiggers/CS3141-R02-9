class task
{
    constructor(name, info, time, frequency)
    {
        this.name = name;                       //Display name of task
        this.info = info; 
        this.time = time;                  
        this.frequency = frequency;
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
} 