let availableKeywords = [
    "Nigeria",
    "Ethereum (ETH)",
    "Tether (USDT)",
    "XRP (XRP)",
    "BNB (BNB)",
    "Solana (SOL)",
    "USD Coin (USDC)",
    "Dogecoin (DOGE)",
    "Cardano (ADA)",
    "TRON (TRX)",
    "Wrapped Bitcoin (WBTC)",
    "Sui (SUI)",
    "Chainlink (LINK)",
    "Avalanche (AVAX)",
    "Stellar (XLM)"
];

// Select all search boxes and result boxes
document.querySelectorAll('.search-box').forEach(form => {
    const inputBox = form.querySelector('input');
    const resultsBox = form.querySelector('.result-box');

    inputBox.onkeyup = function() {
        let result = [];
        let input = inputBox.value;
        if (input.length) {
            result = availableKeywords.filter((keyword) => {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
        }
        display(result, resultsBox, inputBox);

        if (!result.length) {
            resultsBox.innerHTML = "";
        }
    };
});

function display(result, resultsBox, inputBox) {
    const content = result.map((list) => {
        return `<li onclick="selectInput(this, '${inputBox.id}')">${list}</li>`;
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list, inputId) {
    const inputBox = document.getElementById(inputId);
    inputBox.value = list.innerText;
    // Find the closest .result-box and clear it
    list.closest('.result-box').innerHTML = "";
}