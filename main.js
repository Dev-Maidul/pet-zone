// load category
const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await response.json();
  displayCategory(data.categories);
};

// display categorires
const displayCategory = (categories) => {
  const categoriesContainer = document.getElementById("category_container");
  categories.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
        <button class="btn btn-active p-3">${element.category}<img class="w-8" src="${element.category_icon}" alt=""></button>
        `;
    categoriesContainer.append(div);
  });
};

loadCategory();
