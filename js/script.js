const loadData=()=>{ 
    toggleSpinner(true)
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res =>res.json())
    .then(data=>displayData(data.data.tools))
   
}
const loadingData2=()=>{ 
  toggleSpinner(true)
  fetch('https://openapi.programming-hero.com/api/ai/tools')
  .then(res =>res.json())
  .then(data=>displayData2(data.data.tools))
 
}

const toggleSpinner =(isLoading)=>{
    const spin=document.getElementById('spinner')
    if(isLoading){
        spin.classList.remove('d-none')
    }
    else{
        spin.classList.add('d-none')
    }
}

const displayData=(data)=>{
  // console.log(data);
  const show=document.getElementById('show');
  if( data.length >6){
    show.classList.remove('d-none')
    data=data.splice(0,6)
  }
  else{
    show.classList.add('d-none')
  }
    data.forEach(elements => {

        // console.log(elements.id)
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
      <h4>${elements.name} <button onclick=detailsLoading(${elements.id})  type="button"  class="ms-5 border-0 rounded"   data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right"></i></button></h4>
      <p>${elements.published_in}</p>
    </div>
  </div>
    `
    content.appendChild(text)
  });
//   stop spinner
toggleSpinner(false)

}























const displayData2=(data)=>{
  // console.log(data);
  data=data.splice(6,12)
  const show=document.getElementById('show');
    data.forEach(elements => {

        // console.log(elements.id)
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
      <h4>${elements.name} <button onclick=detailsLoading(${elements.id})  type="button"  class="ms-5 border-0 rounded"   data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right"></i></button></h4>
      <p>${elements.published_in}</p>
    </div>
  </div>
    `
    content.appendChild(text)
  });
//   stop spinner
toggleSpinner(false)

}

document.getElementById('show').addEventListener('click',function(){
  loadingData2()
  const show=document.getElementById('show');
  show.classList.add('d-none')
})


const detailsLoading=(id)=>{
fetch(`https://openapi.programming-hero.com/api/ai/tool/0${id}`)
.then(res=>res.json())
.then(data=>displayModal(data))

}
const displayModal=(data)=>{
  console.log(data.data.input_output_examples[0]

    )
  const title=document.getElementById('exampleModalLabel')
  title.innerText=`${data.data.description}`
  const basic=document.getElementById('basic')
  basic.innerText=`${data.data.pricing[0].price}
         ${data.data.pricing[0].plan}
  `
  const pro=document.getElementById('pro')
  pro.innerText=`${data.data.pricing[1].price}
         ${data.data.pricing[1].plan}
  `
  const Enterprise=document.getElementById('Enterprise')
  Enterprise.innerText=`${data.data.pricing[2].price}
         ${data.data.pricing[2].plan}
  `

  const featur=document.getElementById('featur')
  featur.innerText=''
    const featurText=document.createElement('div')
    featurText.innerHTML=`
      <h5>Features</h5>
      <p class="card-text ">1.${data.data.features['1'].feature_name}</p>
      <p class="card-text ">2.${data.data.features['2'].feature_name}</p>
      <p class="card-text ">3.${data.data.features['3'].feature_name}</p>
    `
    featur.appendChild(featurText)

  const integration=document.getElementById('integration')
  integration.innerText=''
    const integrationText=document.createElement('div')
    integrationText.innerHTML=`
      <h5>Integrations</h5>
      <p class="card-text ">1.${data.data.integrations[0]}</p>
      <p class="card-text ">2.${data.data.integrations[1]}</p>
      <p class="card-text ">3.${data.data.integrations[2]}</p>
    `
    integration.appendChild(integrationText)

    const image=document.getElementById('image')
    image.innerHTML=`
    <img style="width:100% ;" src="${data.data.image_link[0]}" alt="">
    
    `

    const input=document.getElementById('input')
    input.innerText=''
    const div=document.createElement('div')
    div.innerHTML=`
    <h3>${data.data.input_output_examples[0].input}</h3>
    <p class="mt-4" >${data.data.input_output_examples[0].output}</p>  
    `
input.appendChild(div)

}
loadData()


