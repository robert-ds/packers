const $app = document.getElementById("app");
const API = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";

const main = async () => {
  const res = await fetch(API);
  const products = await res.json();

  const output = products?.map((product) => {
    return `
      <article class="Card">
        <img src="${product.images[0]}" />
        <h2>${product.title} <small>Price $ ${product.price}</small></h2>
      </article>
    `;
  }).join('');
  let newItem = document.createElement("section");
  newItem.classList.add("Items");
  newItem.innerHTML = output;
  $app.appendChild(newItem);
}

main();