async function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;
    const resultElement = document.getElementById("result");
    const errorMessage = document.getElementById("errorMessage");

    resultElement.textContent = "";
    errorMessage.textContent = "";


    if (amount <= 0) {
        errorMessage.textContent = "Please enter a valid amount greater than zero.";
        return;
    }

    try {

        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        if (!response.ok) throw new Error("Failed to fetch exchange rates");

        const data = await response.json();


        const exchangeRate = data.rates[toCurrency];
        if (!exchangeRate) {
            errorMessage.textContent = "Conversion rate not available for the selected currencies.";
            return;
        }

        const convertedAmount = (amount * exchangeRate).toFixed(2);
        resultElement.textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        errorMessage.textContent = "Error: Unable to fetch conversion rate. Please try again later.";
        console.error("Error fetching conversion data:", error);
    }
}
