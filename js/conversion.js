document.getElementById('currency').addEventListener('change', function () {
    const currency = this.value;
    const apiUrl = 'https://api.hnb.hr/tecajn-eur/v3';
    
    // Proxy server korišten zbog CORS-a.
    // Prije testiranja potrebno ručno otvoriti URL u browseru i kliknuti na button "Request temporary access to the demo server."
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    fetch(proxyUrl + apiUrl)
        .then(response => response.json())
        .then(data => {
            const rates = parseRates(data);
            const conversionRate = rates[currency];
            updatePrices(conversionRate, currency);
        })
        .catch(error => console.error('Error fetching exchange rates:', error));
});

function parseRates(data) {
    const rates = {};
    data.forEach(rate => {
        rates[rate.valuta] = parseFloat(rate.srednji_tecaj.replace(',', '.'));
    });
    return rates;
}

function updatePrices(rate, currency) {

    console.log("rate: " + rate);
    
    if (rate == undefined) {
        rate = 1.0;
    }

    const prices = document.querySelectorAll('.price');

    prices.forEach(priceElement => {
        const basePrice = parseFloat(priceElement.getAttribute('data-price'));
        const convertedPrice = (basePrice * rate).toFixed(0);
        priceElement.textContent = `${convertedPrice}`;
    });

    const currencySymbols = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
    };
    document.getElementById('currency-symbol').textContent = currencySymbols[currency] || currency;
}