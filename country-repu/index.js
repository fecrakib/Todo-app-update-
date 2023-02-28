const countriesE=document.getElementById('countries')
const loadCountry=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>{
    //    console.log(data);
       showAllCountry(data.slice(0,2))
    })
}
const showAllCountry=(conuntries)=>{
console.log(conuntries);

conuntries.map(country=>{
    console.log(country)
    const countryDiv=document.createElement('div')
    countryDiv.innerHTML=`
    <div class="card w-96 bg-base-100 shadow-xl ">
    <figure class="px-10 pt-10">
      <img class="h-15" src="${country.flags.svg}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${country.name.common}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
   
  `
  countriesE.appendChild(countryDiv) 
})

}
loadCountry()