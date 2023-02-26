console.log("country")
const tableDiv=document.getElementById('table')
const allconuntries=document.getElementById('all-conuntries')
//  ---------- using mapping loop---------1st way
const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>{
        const countries=data.map(country=>{
            console.log(country.name.common)
            const tr = document.createElement('tr')
            tr.innerHTML=`
            <td scope="col"> ${country.name.common}</td>
            <td scope="col">${country.flags.svg}</td>
            <td scope="col">${country.population}</td>
            <td scope="col">${country.ccn3}</td>
            `
            tableDiv.appendChild(tr)
        })
    })
}

// -----------using for of loop-------------------------2nd way
// const loadCountries=()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>{
//         for (const country of data) {
//             console.log(country.name.common);
//             const countryDiv=document.createElement('div')
//             countryDiv.classList.add('country')
//             countryDiv.innerHTML=`
//             <table>
//             <tr>
           
//             <td scope="col"> ${country.name.common}</td>
//             <td scope="col">${country.flags.svg}</td>
//             <td scope="col">${country.population}</td>
//             <td scope="col">${country.ccn3}</td>
//           </tr>
//             </table>
          
//             `
//             allconuntries.appendChild(countryDiv)


//         }

//     })
// }

// -----------------using forEach loop-----------------------------3rd way
// const loadCountries=()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>{
//         data.forEach(country => {
//             console.log(country)
//             const countryDiv=document.createElement('div')
//             countryDiv.classList.add('country')
//             countryDiv.innerHTML=
//             `
//             <h3>Name: ${country.name.common}</h3>
//             <p>Capital:${country.capital}</p>
//             <img src="${country.flags.svg}" alt="">
//             <button onclick="displayCountryDetails('${country.cca2}')">Details</button>
//             `
//           allconuntries.appendChild(countryDiv)
           
//         });
//     })

// }
// const displayCountryDetails=code=>{
        
//     const url='https://restcountries.com/v3.1/alpha/${code}'
//     console.log(url);
// }

// --------------using normal for loop-------------------------------------------4th way
// const loadCountries=()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(countries=>{
//         for(const i=0; i<countries.length;i++){
//             console.log(countries[i].name)
//         }

//     })
// }
// 
loadCountries();