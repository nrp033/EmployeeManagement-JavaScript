const IS_FullTime=1;
const IS_PartTime=2;
const WagePer_Hour=20;
const MaxWorkingDays_Month=20;
const MaxHrs_Month=160;

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
    let TotalWorkingDays=0;
    while(TotalHrs < MaxHrs_Month && TotalWorkingDays < MaxWorkingDays_Month){
        let empCheck=Math.floor(Math.random()*10)%3;
        TotalHrs+=GetWorkingHrs(empCheck);
        TotalWorkingDays++;
    }
    let EmpWage=TotalHrs*WagePer_Hour;
    console.log("Total Workng Days : "+TotalWorkingDays+ "      Total Hours  : "+TotalHrs+"     Total Employee Wage : " +EmpWage);
   
    




