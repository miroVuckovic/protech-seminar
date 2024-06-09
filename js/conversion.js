document.getElementById('currency').addEventListener('change', function () {
    const currency = this.value;
    const apiUrl = 'https://api.hnb.hr/tecajn-eur/v3';
    
    // Proxy server korišten zbog CORS-a. infinityfree.com ne podržava CORS.
    // https://forum.infinityfree.com/t/ensuring-only-web-browsers-can-access-your-website/49353
    // Prije testiranja potrebno ručno otvoriti URL u browseru i kliknuti na button "Request temporary access to the demo server."
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    // Dohvaćanje API-ja preko CORS proxya.
    fetch(proxyUrl + apiUrl)
        .then(response => response.json())
        .then(data => {
            const rates = parseRates(data);
            const conversionRate = rates[currency];
            updatePrices(conversionRate, currency);
        })
        .catch(error => console.error('Pogreška pri dohvaćanju tečaja:', error));
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