function netSalary(basicSalary, benefits){
    const grossSalary = basicSalary + benefits;
    let PAYE;
        if (grossSalary <= 24000){
            PAYE = 0.1 * grossSalary;
        } else if (grossSalary <= 32333){
            PAYE = 0.25 * grossSalary;
        } else if (grossSalary <= 500000){
            PAYE = 0.3 * grossSalary;
        } else if (grossSalary <= 800000){
            PAYE = 0.325 * grossSalary;
        } else {
            PAYE = 0.35 * grossSalary
        }
    let nhifDeduction;
        if (grossSalary<=150){
            nhifDeduction = 150;
        } else if (grossSalary<=7999){
            nhifDeduction = 300;
        } else if (grossSalary<=11999){
            nhifDeduction = 400;
        } else if (grossSalary<=14999){
            nhifDeduction = 500;
        } else if (grossSalary<=19999){
            nhifDeduction = 600;
        } else if (grossSalary<=24999){
            nhifDeduction = 750;
        } else if (grossSalary<=29999){
            nhifDeduction = 850;
        } else if (grossSalary<=34999){
            nhifDeduction = 900;
        } else if (grossSalary<=39999){
            nhifDeduction = 950;
        } else if (grossSalary<=44999){
            nhifDeduction = 1000;
        } else if (grossSalary<=49999){
            nhifDeduction = 1100;
        } else if (grossSalary<=59999){
            nhifDeduction = 1200;
        } else if (grossSalary<=69999){
            nhifDeduction = 1300;
        } else if (grossSalary<=79999){
            nhifDeduction = 1400;
        } else if (grossSalary<=89999){
            nhifDeduction = 1500;
        } else if (grossSalary<=99999){
            nhifDeduction = 1600;
        } else {
            nhifDeduction = 1700
        }
    const nssf = 0.06 * grossSalary;

    const netsalary = grossSalary - PAYE - nhifDeduction - nssf
console.log (`payee : ${PAYE}`) 
console.log (`NSSF deduction : ${nssf}`)
console.log (`NHIF deduction : ${nhifDeduction}`)
console.log (`Net salary : ${netsalary}`)
}