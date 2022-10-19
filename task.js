class task
{
    constructor(name, info, type, frequency, lastFinished)
    {
        this.name = name;                       //Display name of task
        this.info = info; 
        this.type = type;                   //'D' or 'I'. Days or intervals.
        this.frequency = frequency;         //D could be any substring of "SMTWRFZ" (R=Thurs. Z=Sat). I is any integer
        this.lastFinished = lastFinished;
    }
    getName()
    {
        return this.name;
    }
    getID()
    {
        return this.id;
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
    doSunday()
    {
        if (this.type == 'D')
        {
            return this.frequency.includes("S");
        }
    }
    doMonday()
    {
        if (this.type == 'D')
        {
            return this.frequency.includes("M");
        }
    }
    doTuesday()
    {
        if (this.type == 'D')
        {
            return this.frequency.includes('T');
        }
    }
    doWednesday()
    {
        if (this.type == 'D')
        {
            return this.frequency.includes("W");
        }
    }
    doThursday()
    {
        if (this.type == 'D')
        {
            return this.frequency.includes("R");
        }
    }
    doFriday()
    {
        if (this.type == 'D')
        {
            return this.frequency.includes("F");
        }
    }
    doSaturday()
    {
        if (this.type == 'D')
        {
            return this.frequency.includes("Z");
        }
    }
}
