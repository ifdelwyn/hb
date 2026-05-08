// ===============================
// SHOPEASY API CONFIG
// ===============================

// DÁN MOCKAPI URL CỦA BẠN VÀO ĐÂY

const BASE_URL =
  "https://69ead54f15c7e2d5126a10ba.mockapi.io/v1/EcoShop";


// ===============================
// GET ALL PRODUCTS
// ===============================

async function getProducts() {

  try {

    const response =
      await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error(
        "Failed to fetch products"
      );
    }

    const data =
      await response.json();

    return data;

  } catch (error) {

    console.error(
      "GET PRODUCTS ERROR:",
      error
    );

    return [];
  }
}


// ===============================
// GET SINGLE PRODUCT
// ===============================

async function getProductById(id) {

  try {

    const response =
      await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(
        "Failed to fetch product"
      );
    }

    return await response.json();

  } catch (error) {

    console.error(
      "GET PRODUCT ERROR:",
      error
    );
  }
}


// ===============================
// CREATE PRODUCT
// ===============================

async function createProduct(product) {

  try {

    const response =
      await fetch(BASE_URL, {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify(product)

      });

    if (!response.ok) {
      throw new Error(
        "Failed to create product"
      );
    }

    return await response.json();

  } catch (error) {

    console.error(
      "CREATE PRODUCT ERROR:",
      error
    );
  }
}


// ===============================
// UPDATE PRODUCT
// ===============================

async function updateProduct(id, product) {

  try {

    const response =
      await fetch(`${BASE_URL}/${id}`, {

        method: "PUT",

        headers: {
          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify(product)

      });

    if (!response.ok) {
      throw new Error(
        "Failed to update product"
      );
    }

    return await response.json();

  } catch (error) {

    console.error(
      "UPDATE PRODUCT ERROR:",
      error
    );
  }
}


// ===============================
// DELETE PRODUCT
// ===============================

async function deleteProduct(id) {

  try {

    const response =
      await fetch(`${BASE_URL}/${id}`, {

        method: "DELETE"

      });

    if (!response.ok) {
      throw new Error(
        "Failed to delete product"
      );
    }

    return await response.json();

  } catch (error) {

    console.error(
      "DELETE PRODUCT ERROR:",
      error
    );
  }
}


// ===============================
// SEARCH PRODUCTS
// ===============================

async function searchProducts(keyword) {

  try {

    const response =
      await fetch(
        `${BASE_URL}?search=${keyword}`
      );

    if (!response.ok) {
      throw new Error(
        "Search failed"
      );
    }

    return await response.json();

  } catch (error) {

    console.error(
      "SEARCH ERROR:",
      error
    );

    return [];
  }
}


// ===============================
// FILTER BY CATEGORY
// ===============================

async function filterProducts(category) {

  try {

    const response =
      await fetch(
        `${BASE_URL}?category=${category}`
      );

    if (!response.ok) {
      throw new Error(
        "Filter failed"
      );
    }

    return await response.json();

  } catch (error) {

    console.error(
      "FILTER ERROR:",
      error
    );

    return [];
  }
}