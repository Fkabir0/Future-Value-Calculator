function calculateFutureValue() {
    const principal = parseFloat(document.getElementById('principal').value);
    const monthly = parseFloat(document.getElementById('monthly').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12; // Monthly rate
    const years = parseInt(document.getElementById('years').value);
    const months = years * 12;

    if (
        isNaN(principal) ||
        isNaN(monthly) ||
        isNaN(rate) ||
        isNaN(years) ||
        principal < 0 ||
        monthly < 0 ||
        rate < 0 ||
        years <= 0
    ) {
        document.getElementById('result').textContent = "Please enter valid input values.";
        return;
    }

    // Future Value Calculation with Monthly Contributions
    let futureValue = principal * Math.pow(1 + rate, months);
    for (let i = 1; i <= months; i++) {
        futureValue += monthly * Math.pow(1 + rate, months - i);
    }

    document.getElementById('result').textContent = `Future Value: $${futureValue.toFixed(2)}`;
}
