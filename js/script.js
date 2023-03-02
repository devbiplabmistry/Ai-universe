const loadData=()=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res =>res.json())
    .then(data=>displayData(data.data.tools))

    
}

const displayData=(data)=>{
    data.forEach(elements => {
        console.log(elements)
   
    const content=document.getElementById('content')
    const text=document.createElement('div')
    text.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${elements.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Features</h5>
      <p class="card-text ">1.${elements.features[0]}</p>
      <p class="card-text ">2.${elements.features[1]}</p>
      <p class="card-text ">3.${elements.features[2]}</p>
      <h4>${elements.name}   <a><i class="fa-solid fa-arrow-right ms-5"></i></a></h4>
      <p>${elements.published_in}</p>
    
    </div>
  </div>

    `
    content.appendChild(text)





 
    
  });

}
loadData()