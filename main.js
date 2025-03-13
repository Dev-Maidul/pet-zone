// load category
const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await response.json();
  displayCategory(data.categories);
};
// Load pets
const loadPets = async (cantegoryName) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${cantegoryName}`
  );
  const data = await response.json();
  displayPets(data.data);
};

// Display Pets
const displayPets=(pets)=>{
    const petContainer=document.getElementById('petContainer');
    petContainer.innerHTML="";
   pets.forEach((pet)=>{
    console.log(pet);
    const div=document.createElement('div');
    div.classList.add('mt-5');
    div.innerHTML=`
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src=${pet.image}/>
  </figure>
  <div class="card-body">
    <h2 class="card-title">${pet.breed}</h2>
    <p>${pet.pet_details.slice(0,150)
    }</p>
    <p>Date of Birth: ${pet.date_of_birth}</p>
    <br>
    <p class="text-2xl font-bold">Price: ${pet.price
    }</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
    `;
    petContainer.append(div);
   })
}


// display categorires
const displayCategory = (categories) => {
  const categoriesContainer = document.getElementById("category_container");
  categories.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
        <button onclick="loadPets('${element.category}')" class="btn btn-active p-3">${element.category}<img class="w-8" src="${element.category_icon}" alt=""></button>
        `;
    categoriesContainer.append(div);
  });
};

loadPets("dog");
loadCategory();
