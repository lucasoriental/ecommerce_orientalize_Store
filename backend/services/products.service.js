import {
  getAllProductsModel,
  getProductByIdModel,
  addProductModel,
  updateProductModel,
} from "../models/products.model.js";

export async function getAllProductsService() {
  try {
    const result = await getAllProductsModel();
    if (!result) throw new Error("No Products in the database");
    return result;
  } catch (error) {
    console.error("getAllProductsService\n");
    console.error("Error fetching All Products:", error);
    throw new Error(
      "Something went wrong while fetching all the Products data."
    );
  }
}

export async function getProductByIdService(id) {
  try {
    const result = await getProductByIdModel(id);
    if (!result) throw new Error("Product not found");
    return result;
  } catch (error) {
    console.error("getProductByIdService\n");
    console.error("Error fetching Product by ID:", error);
    throw new Error(
      "Something went wrong while fetching the Product data by ID."
    );
  }
}

export async function addProductService(productData) {
  try {
    // Assuming you have a function to add a product in the model
    const newProduct = await addProductModel(productData);
    /* if (!newProduct) {
      throw new Error("Product already exists");
    } */
    return newProduct;
  } catch (error) {
    console.error("addProductService\n");
    console.error("Error adding Product:", error);
    throw new Error("Error adding Product");
  }
}

export async function updateProductService(name, price, description, id) {
  try {
    const updatedProduct = await updateProductModel(
      name,
      price,
      description,
      id
    );
    return updatedProduct;
  } catch (error) {
    console.error("updateProductService\n");
    console.error("Error updating Product:", error);
    throw new Error("Error updating Product");
  }
}
