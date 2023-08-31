let numberSetKorarNiyom = 0;
const handleCategory = async () => {
  // console.log('hello first');
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const link = await response.json();

  // console.log(link.link.news_category);
  const tabContainer = document.getElementById("tab-container");
  const trimedData = link.data.news_category.slice(0, 4);
  trimedData.forEach((category) => {
    numberSetKorarNiyom = numberSetKorarNiyom + 1;

    const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="handleoadNews('${category.category_id}')" class="tab">${numberSetKorarNiyom} ${category.category_name}</a>
    `;
    tabContainer.appendChild(div);
  });
  //   console.log('hello second');
};

const handleoadNews = async (categoryId) => {
  // console.log('hello first');
  const response = await fetch(
    ` https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const link = await response.json();
  const cardcontent = document.getElementById('card-container')
  link.data.forEach((newse) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src=${newse.image_url}
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
      ${newse.title.slice(0, 45)}
        <div class="badge badge-secondary p-5">Excellent</div>
      </h2>
      <p>${newse.details.slice(0, 100)}</p>
      <p>
      total view: ${newse.total_view}
      </p>
      <div class="card-footer flex justify-between mt-8">
        <div class="flex">
          <div>
            <div class="avatar online">
              <div class="w-14 rounded-full">
                <img
                  src=${newse.author?.img}
                />
              </div>
            </div>
          </div>
          <div>
            <h6>${newse.author.name}</h6>
            <small>${newse.author. published_date}</small>
          </div>
        </div>
        <div class="card-detaild-btn">
          <button
            class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  </div>
    `;
    cardcontent.appendChild(div);
  })
 
  console.log(link);
};

handleCategory();


// 1.19 mint dekha hoiche
