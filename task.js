class task
{
    constructor(name, info, time, frequency)
    {
        this.name = name;                       //Display name of task
        this.info = info; 
        this.time = time;                   //'D' or 'I'. Days or intervals.
        this.frequency = frequency;         //D could be any substring of "SMTWRFZ" (R=Thurs. Z=Sat). I is any integer
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
    getTime()
    {
        return this.time;
    }
    getFrequency()
    {
        return this.frequency;
    }
}