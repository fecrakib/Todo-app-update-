// document.getElementById('btn-search').addEventListener('click',()=>{
   
// })
const playerE=document.getElementById('players')
const searchAllData=()=>{
    const inputElement=document.getElementById('search-value')
    const inputValue=inputElement.value ;
    console.log(inputValue);
    const url=`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
showplayers(data.player)
    })
}
const showplayers=(players)=>{
    console.log(players);
    players.map(p=>{
        const playersDiv=document.createElement('div')
        console.log(p);
        // destracturing
        const {strThumb,strPlayer}=p;
        playersDiv.innerHTML=`
        
        <div class="card  bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${strThumb ? strThumb:"https://picsum.photos/200"}" alt="Shoes" class="rounded-xl h-40" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${strPlayer}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
        playerE.appendChild(playersDiv)
    })

}
