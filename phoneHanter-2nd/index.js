const phonesE=document.getElementById('phones')
const loadPhones=async(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res=await fetch(url)
    const data=await res.json();
   
    displayData(data.data)
}
const displayData=(phones)=>{
console.log(phones)
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
}


// seacrh field add
const searchFieldE=document.getElementById('searchField')
const seacrhBtn=document.getElementById('btn-search')
seacrhBtn.addEventListener('click',()=>{
  const searchText=searchFieldE.value ;
  loadPhones(searchText)
})
