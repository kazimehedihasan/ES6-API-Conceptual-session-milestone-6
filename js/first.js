let numberSetKorarNiyom = 0;
const handleCategory = async () => {
    // console.log('hello first');
  const respons = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const link = await respons.json();

  console.log(link.data.news_category);
  const tabContainer = document.getElementById("tab-container");
  link.data.news_category.slice(0, 4).forEach((news) => {

numberSetKorarNiyom = numberSetKorarNiyom + 1;

    const div = document.createElement("div");
    div.innerHTML = `
    <a class="tab">${numberSetKorarNiyom} ${news.category_name}</a>
    `;
    tabContainer.appendChild(div);
  });
//   console.log('hello second');
};

handleCategory();
