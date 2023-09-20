// const reqListener = function () {
//     const response = JSON.parse(this.responseText);
  
//     const totalPopulation = response.reduce((total, country) => {
//       return total + (country.population); 
//     }, 0);
//     console.log('Total Population of All Countries:',totalPopulation)
  
//   };
  
//   const req = new XMLHttpRequest();
//   req.addEventListener("load", reqListener);
//   req.open("GET", "https://restcountries.com/v3.1/all");
//   req.send();

