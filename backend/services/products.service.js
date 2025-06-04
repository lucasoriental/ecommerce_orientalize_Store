import {
  getAllProductsModel,
  getProductByIdModel,
  addProductModel,
  updateProductModel,
  deleteProductModel,
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
    const newProduct = await addProductModel(productData);
    return newProduct;
  } catch (error) {
    console.error("addProductService\n");
    console.error("Error adding Product:", error);
    throw new Error("Error adding Product");
  }
}

export async function updateProductService(productData) {
  try {
    const updatedProduct = await updateProductModel(productData);
    return updatedProduct;
  } catch (error) {
    console.error("updateProductService\n");
    console.error("Error updating Product:", error);
    throw new Error("Error updating Product");
  }
}

export async function deleteProductService(productData) {
  try {
    const deleteProduct = await deleteProductModel(productData);
    //console.log(deleteProduct);
    return deleteProduct;
  } catch (error) {
    console.error("deleteProductService\n");
    console.error("Error while Deleting Product attempt: ", error);
    res.status(500).json({ message: "Error Deleting Product!" });
  }
}
