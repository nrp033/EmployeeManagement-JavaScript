const IS_FullTime=1;
const IS_PartTime=2;
const Part_TimeHours=4;
const Full_TimeHours=8;
const WagePer_Hour=20;

function GetWorkingHrs(empCheck){
    switch(empCheck){

        case IS_FullTime:
            return Full_TimeHours;
            
        case IS_PartTime:
            return Part_TimeHours;
        
            default:
            return 0;
            
    }
}


        let empCheck=Math.floor(Math.random()*10)%3;
        let empHours=GetWorkingHrs(empCheck);
        let EmpWage=empHours*WagePer_Hour;
        console.log("Working Hours  : "+empHours+"  Employee Wage : " +EmpWage);
   
    




