const phoneE = document.getElementById("phones");

const loadPhone = (searchText,dataLimit) => {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((res) => res.json())
    .then((data) => {
   
displayPhones(data.data,dataLimit)
   
    });
};
const displayPhones=(phones,dataLimit)=>{
    phoneE.textContent='';
    // display 20 phones only
    const showAll=document.getElementById('show-all');
    if(dataLimit && phones.length>10){
        phones=phones.slice(0,10)
       
        showAll.classList.remove('d-none')
    }else{
        showAll.classList.add('d-none')
    }
    
    // display no phones found
    const nophone=document.getElementById('no-found-message')
    if(phones.length===0){
        nophone.classList.remove('d-none')
    }else{
        nophone.classList.add('d-none')
    }
    phones.forEach((p) => {
        // console.log(p);
        const phoneDiv = document.createElement("div");
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML = `
        <div class="card">
        <img src="${p.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${p.brand}</h3>
          <h4>${p.phone_name}</h4>
          <h5>${p.slug}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadphoneDetails('${p.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
  
        </div>
      </div>
        `;
        phoneE.appendChild(phoneDiv);
      });
    //   stop loader
    toggleSpinner(false)
}
// process Search
const processSeach=(dataLimit)=>{
    toggleSpinner(true)
  const searchField = document.getElementById("searchField");
  const searchText = searchField.value;
  loadPhone(searchText,dataLimit);
}
// loadPhone();
// handle search  click
document.getElementById("btn-search").addEventListener("click", () => {
    // start loader
processSeach(10)
});
// enter key event key handealler
document.querySelector('#searchField').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSeach(10)
    }
});
// loading function
const toggleSpinner=isLoading=>{
    const loaderSection=document.getElementById('loader')
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }else{
        loaderSection.classList.add('d-none')
    }
}
// not the best way to load show all data
document.getElementById('btn-show-all').addEventListener('click',()=>{
processSeach()
})
// load phone Details using unique id
const loadphoneDetails=async id=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    const res=await fetch(url);
    const data=await res.json();
    console.log(data.data);
    displayPhoneDetails(data.data)
}
// display Phones Details
const displayPhoneDetails=phone=>{
    const modalTitle=document.getElementById('phoneDetailModalLabel')
    modalTitle.innerText=phone.name;
    console.log(phone)
    const phonedetails=document.getElementById('phone-details')
    phonedetails.innerHTML=`
    <p>Relase Date: ${phone.releaseDate?phone.releaseDate:"Not found"}</p>
    <p >Storage: ${phone.mainFeatures? phone.mainFeatures.storage:"No storage Found"}</p>
    <p>${phone.mainFeatures.displaySize}</p>
    `

console.log(phone);
}
loadPhone('a')

