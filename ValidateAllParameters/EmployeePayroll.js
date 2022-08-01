//Ability to create Employee Payroll Data with id, name and salary
class EmployeePayRollData
{
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    //constructor(id,name,salary)
    //{
        //this.id=id;
        //this.name=name;//uc12
        //this.salary=salary;//uc12
    //}
    //parameterized constructor
    //using spread operator
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    //getter and setter
    //using getter and seeter we can acess name and we can apply logic here also
    get name() {return this._name; }
    set name(name) {
        console.log("To set the name: "+name)
        this._name=name;
    }
    //method
    toString()
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return `Id: ${this.id} \tName: ${this.name} \tSalary: ${this.salary},\tGender: ${this.gender}, \tStart Date: ${empDate}`;
        return "id:"+this.id +",name: "+this.name +",salary" +this.salary +",gender"+this.gender+ ",startDate"+this.startDate;

    }
}
let employePayrollData=new EmployeePayRollData(1, "Naveen",9087612,);
console.log(employePayrollData.toString());
//if want to change the name and id
employePayrollData.id=0;
employePayrollData.name="Luv"
console.log(employePayrollData.toString());
employePayrollData=new EmployeePayRollData(1, "Naveen",9087612,"M",new Date());
console.log(employePayrollData.toString());


 ////////////////////////////////////////////////////UC13/////////////////////////////////////////////

//Ability to create Employee Payroll Data with id, name and salary
class EmployeePayRollData
{
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    //getter and setter
    //using getter and seeter we can acess name and we can apply logic here also
    get name() {return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))//test is used to check pattren is mathing or not
        {
            this._name = name;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._name=name;
    }
    //method
    toString()
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id:"+this.id +",name: "+this.name +",\tsalary" +this.salary +", \tgender" +this.gender+",\tstartDate:"+this.startDate;
        
    }
}
//UC13
//Created obj for class using parameterized conbstructor
let employePayrollData=new EmployeePayRollData(1, "Naveen",9087612,"M",new Date());
console.log(employePayrollData.toString());
try{
    employePayrollData.name="Luv";
    console.log(employePayrollData.toString());
    
}
catch(e)
{
    console.error(e);
}


////////////////////////////////////////UC14///////////////////////////////////////////////////////////




//Ability to create Employee Payroll Data with id, name and salary
class EmployeePayRollData
{
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    //getter and setter
    //using getter and seeter we can acess name and we can apply logic here also
    get name() {return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))//test is used to check pattren is mathing or not
        {
            this._name = name;
        }
        else throw 'Name is Incorrect!'; 
        //console.log("To set the name: "+name)
        this._name=name;
    }
    //validating salary
    get salary() { return this._salary };
    set salary(salary) 
        {
            let salaryPattern = new RegExp('^[1-9][0-9]*$');
            if(salaryPattern.test(salary))
                this._salary = salary;
            else
                throw "The Given Salary Is Invalid";
        }
    //validating gender
    get gender() { return this._gender };
    set gender(gender)
        {
            let genderPattern = new RegExp('M|F');
            if(genderPattern.test(gender))
                this._gender=gender;
            else
                throw "The Given Gender Is Not Correct";
        }
    //Validate start date is not future date
    get startDate(){ return this._startDate };
    set startDate(startDate)
        {
            let todayDate = new Date();
            if(startDate <= todayDate)
                this._startDate = startDate;
            else
                throw "The Given Date Is Greater Than Current Date";
        }

    //method
    toString()
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id:"+this.id +",name: "+this.name +",\tsalary" +this.salary +", \tgender" +this.gender+",\tstartDate:"+this.startDate;
        
    }
}
//UC13
//Created obj for class using parameterized conbstructor
//UC14 Ability to check the employee id and salary are non zero positive number, the gender is M or F and date is not a future date   
try{
    let employePayrollData=new EmployeePayRollData(1, "Janardhana",90876,"M",new Date());
    console.log(employePayrollData.toString());
}
catch(e)
{
    console.error(e);
}
