// const reqListener = function () {
//     const response = JSON.parse(this.responseText);
//   console.log(response)
//     const usDollarCountries = response.filter(country => {
//         return  country.currencies && country.currencies.USD;
//     });
//     console.log(usDollarCountries)
//     usDollarCountries.forEach(country => {
//         console.log('Country Name:', country.name.common);
//     });
//   };
  
//   const req = new XMLHttpRequest();
//   req.addEventListener("load", reqListener);
//   req.open("GET", "https://restcountries.com/v3.1/all");
//   req.send();
  