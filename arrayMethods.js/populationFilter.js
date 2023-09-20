// const reqListener = function () {
//     const data= JSON.parse(this.responseText);
//     console.log(data)
   
//     countriesWithLessPopulation = data.filter(e=>
//       {
//       countryPopulation = e.population<200000
//       return countryPopulation
//     }
//       )
//     console.log(countriesWithLessPopulation)
 
//   countriesWithLessPopulation.forEach(country => {
//     console.log('Name:', country.name.common);
//     console.log('Population:', country.population);
//   });
// //   };
  
//   const req = new XMLHttpRequest();
//   req.addEventListener("load", reqListener);
//   req.open("GET", "https://restcountries.com/v3.1/all");
//   req.send();
  
  