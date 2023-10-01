const form = document.querySelector('#tax-form');//VALUE INPUT

function calculatorIncomeTax(income){//TAX FUNCTION THAT GENERATES THE TAX TO BE DEDUCTED FROM ANNUAL INCOME AS PER SLAB
    let tax= 0;
    if(income <=288000){
        tax = (income) *0.1;
    }else if(income > 288001&& income <= 388000){
        tax = (288000) * 0.1 + (income - 388000) * 0.25
    }else if(income >388001){
        tax = (288000) * 0.1 + (388000) * 0.25 + (income - 388001) * 0.3
    }
    return tax;
}
//PROMPTS THE USER THE TAX DEDUCTED FROM THE SALARY INPUT
form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const income = Number(form.income.value);
    const tax = calculatorIncomeTax(income);

    alert(`The income tax for an income of ${income} is: ${tax}`);
})
//END OF CODE//