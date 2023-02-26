const phoneE=document.getElementById('phones')
const loadPhone=()=>{
    fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res=>res.json())
    .then(phones=>{
        console.log(phones.data)
    // const phone=phones.map(p=>{
    //     console.log(p)
    // })
phones.data.forEach(p=> {
        console.log(p);
        const phoneDiv=document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML=`
        <div class="card">
        <img src="${p.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${p.brand}</h3>
          <h4>${p.phone_name}</h4>
          <h5>${p.slug}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
phoneE.appendChild(phoneDiv)

    });
        
    })
}
loadPhone();