const IS_FullTime=1;
const IS_PartTime=2;
const WagePer_Hour=20;


    let empHours=0;
    let empCheck=Math.floor(Math.random()*10) % 3;
    switch(empCheck){

        case IS_FullTime:
            empHours= 8;
            break;
        case IS_PartTime:
            empHours= 4;
            break;
        default:
            empHours=0;
            break; 
            
    }

    let EmpWage=empHours*WagePer_Hour;
    console.log("Working Hours  : "+empHours+"  Employee Wage : " +EmpWage);
   
    




