const IS_FullTime=1;
const IS_PartTime=2;
const WagePer_Hour=20;
const MaxWorkingDays_Month=20;

function GetWorkingHrs(empCheck){
    switch(empCheck){

        case IS_FullTime:
            return 8;
            
        case IS_PartTime:
            return 4;
        
            default:
            return 0;
            
    }
}

    let TotalHrs=0;
    for(let day=0;day<MaxWorkingDays_Month;day++){
        let empCheck=Math.floor(Math.random()*10)%3;
        TotalHrs+=GetWorkingHrs(empCheck);
    }
    let EmpWage=TotalHrs*WagePer_Hour;
    console.log("Hours  : "+TotalHrs+"  Employee Wage : " +EmpWage);
   
    




