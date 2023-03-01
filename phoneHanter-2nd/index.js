const phonesE=document.getElementById('phones')
const loadPhones=async(searchText,dataLimit)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res=await fetch(url)
    const data=await res.json();
   
    displayData(data.data,dataLimit)
}
const displayData=(phones,dataLimit)=>{
console.log(phones)
phonesE.textContent=''
// display no phone 
const noPhone=document.getElementById('meassageNo-phone')
// if(phones.length===0){
// noPhone.classList.remove('hidden')

// }else{
// // noPhone.classList.remove('hidden')
// }
// // display 20 phones only
const showAll=document.getElementById('show-all')
if(dataLimit && phones.length>10){
    phones=phones.slice(0,10)
   
    showAll.classList.remove('hidden')
}else{
    showAll.classList.add('hidden')
}
phones.map(phone=>{
    // console.log(phone)
    const phoneDiv=document.createElement('div')
    phoneDiv.innerHTML=`
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img class="h-30" src="${phone.image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${phone.phone_name}!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
    `
phonesE.appendChild(phoneDiv)
})
// stop loader or speening
toggleSpinner(false)
}
// call loadPhones function for load data
const processSearch=(dataLimit)=>{

    toggleSpinner(true)
    const searchFieldE=document.getElementById('searchField')
      const searchText=searchFieldE.value ;
      loadPhones(searchText,dataLimit)
}

// seacrh field add

const seacrhBtn=document.getElementById('btn-search')
seacrhBtn.addEventListener('click',()=>{
//start loader or start spining and call loadphes function for show data
processSearch(10)

})
// cereate function for spining or loader
const toggleSpinner=isLoading=>{
const loaderSection=document.getElementById('loader')
if(isLoading){
    loaderSection.classList.remove('hidden')
}else{
    loaderSection.classList.add('hidden')
}
}
// not best way to load all phones
document.getElementById('btn-show-all').addEventListener('click',()=>{

    processSearch()
})
// show all phone by click btn 
// const showAll=(searchText)=>{
//     const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
//     fetch(url)
//     .then(res=>res.json)
//     .then(data=>{
//         displayData(data.data) 
//         console.log(data.data)
//     })
   
   
// }