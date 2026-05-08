const BASE_URL =
  "https://YOUR_MOCKAPI_URL/products";

async function getProducts() {

  const response = await fetch(BASE_URL);

  return await response.json();
}

async function createProduct(product) {

  return await fetch(BASE_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(product)
  });
}

async function updateProduct(id, product) {

  return await fetch(`${BASE_URL}/${id}`, {

    method: "PUT",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(product)
  });
}

async function deleteProduct(id) {

  return await fetch(`${BASE_URL}/${id}`, {

    method: "DELETE"

  });
}