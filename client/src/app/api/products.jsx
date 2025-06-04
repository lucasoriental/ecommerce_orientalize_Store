import axios from "axios";

const STORE_BASE_API_URL = "https://fakestoreapi.com/products";

export async function getAllProducts() {
  try {
    const response = await axios.get(STORE_BASE_API_URL);
    // Check if the response status is 200 (OK)
    if (response.status === 200) {
      console.log(response);
      return response.data;
    } else {
      console.error(
        `Error fetching products! Status Code: ${response.status}: ${response.statusText}`
      );
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
  } catch (err) {
    console.error("Error fetching products:", err);
    throw new Error(`Failed to fetch products: ${err.message}`);
  }
}
