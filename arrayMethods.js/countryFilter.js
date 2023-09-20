const reqListener = function () {
    const response = JSON.parse(this.responseText);
    
    const asiaCountries = response.filter(country => {
        return country.region === 'Asia';
    });

    asiaCountries.forEach(country => {
        console.log('Country Name:', country.name.common);
    });
};

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
