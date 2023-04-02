function calculate_tax(income) {
    const lakh = 100000; 
    const taxable_income = Math.max(income - 50000, 0);
    if(taxable_income < (3*lakh)) {
        return 0;
    } else if(taxable_income > (3*lakh) && taxable_income <= (6*lakh)) {
        return (taxable_income - (3*lakh)) * 0.05;
    } else if(taxable_income > (6*lakh) && taxable_income <= (9*lakh)) {
        return 15000 + (taxable_income - (6*lakh)) * 0.10;
    } else if(taxable_income > (9*lakh) && taxable_income <= (12*lakh)) {
        return 45000 + (taxable_income - (9*lakh)) * 0.15;
    } else if(taxable_income > (12*lakh) && taxable_income <= (15*lakh)) {
        return 90000 + (taxable_income - (12*lakh)) * 0.20;
    } else {
        return 150000 + (taxable_income - (15*lakh)) * 0.30;
    } 
}