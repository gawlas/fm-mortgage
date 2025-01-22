export function calculateInterestOnlyMortgage(amount, term, years) {
    const monthly = amount * (term / 12);
    const total = monthly * 12 * years;

    return {
        total: total,
        monthly: monthly
    };
}

export function calculateRepaymentMortgage(amount, term, years) {
    const numberOfRepayment = 12 * years;
    const monthlyTerm = term / 12;
    const monthly = (amount * monthlyTerm * Math.pow((1 + monthlyTerm), numberOfRepayment)) / (Math.pow((1 + monthlyTerm), numberOfRepayment) - 1)
    const total = monthly * 12 * years;

    return {
        total: total,
        monthly: monthly
    };
}
