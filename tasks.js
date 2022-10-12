class tasks
{
    //Name of Task
    //Description of task
    //Type D or I. MWF or Interval like 3 days
    //frequency MWF for D. 3 for I
    constructor(name, description, type, frequency)
    {
        this.name = name;
        this.description = description;
        this.type = type;
        this.frequency = frequency
    }

    getType()
    {
        return this.type();
    }
}
// {cookieID}{reoccurenceType}{MWF/E 3 days}{ }