////////UC1-Check employee present or not////////////
const IS_ABSENT = 0
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) 
{
    console.log("UC1 Employee is Absent");
    return;
 } 
 else
  {
     console.log("UC1 Employee is PRESENT")
  }
//////////////////UC2-to check parttime with full and absent//////////////////
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HOURS=20;
let empHrs=0;
empCheck= Math.floor(Math.random() * 10) % 3;
switch(empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HRS;
        break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HRS;
            break;
            default:
                empHrs=0;

}
let empWage=empHrs*WAGE_PER_HOURS;
console.log("UC2 empwage:"+empWage);

///////////UC-3refactor the code to write a fuctiion to get work hours/////////////
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HRS;
            case IS_FULL_TIME:
                return FULL_TIME_HRS;
                default:
                    return 0;
    }
}
empHrs=0;
empCheck=Math.floor(Math.random() * 10) % 3;
empHrs=getWorkingHours(empCheck);
empWage=empHrs * WAGE_PER_HOURS;
console.log("EMPWAGE: "+empWage);

////////////UC4-Calculate wage for a month assuming 20 working days////////
NUM_OF_WORKING_DAYS=20;
empHrs=0;
empWageo=0;
empArray=new Array();
for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
{
    empCheck=Math.floor(Math.random() * 10) % 3;
    empHrs+=getWorkingHours(empCheck);
    empHours=getWorkingHours(empCheck); 
    empWageo=empHours*WAGE_PER_HOURS;
    console.log("day:"+day+"\tempwage:"+(empWageo));
    empArray.push(empWageo)
}
console.log(" UC-6array");
//console.log(empArray.forEach(displaywage));
empArray.forEach(function(empWageo) {
    
});
console.log(empArray.toString());
empWage=empHrs*WAGE_PER_HOURS;
console.log(" UC4 Total hrs:"+ +empHrs+ "Emp wage: " + empWage);
function displaywage(empWageo)
{
    console.log("\tdailywage:"+empWageo)

}

///Uc5-Calculating till mmamximum working hours and days reaches using while loop//////////
MAX_HRS_IN_MONTH=100;
NUM_OF_WORKING_DAYS=10;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{

    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10) % 3;
    totalEmpHrs+=getWorkingHours(empCheck);
    empWage3=totalEmpHrs*20;
}
empWage=totalEmpHrs*WAGE_PER_HOURS;
console.log("UC5 - total-days:" + totalWorkingDays + "\ttotal_hrs" + totalEmpHrs + "\temp wage: " + empWage);

///////////UC-6 Store daily wage along with totalwage////////////

function calcDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOURS;
}
MAX_HRS_IN_MONTH=160;
NUM_OF_WORKING_DAYS=20;
totalEmpHrs=0;
totalWorkingDays=0;
let empDailyWageArray=new Array();
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random() * 10) % 3;
    totalEmpHrs+=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    res=calcDailyWage(empHours)
    empDailyWageArray.push(calcDailyWage(empHours));
    empDailyWageArray.forEach(display)
}
function display(item)
{
    console.log(item)
}
empWage=totalEmpHrs*WAGE_PER_HOURS;
console.log("UC6 - total-days:" + totalWorkingDays + "\ttotal_hrs" + totalEmpHrs + "\temp wage: " + empWage);