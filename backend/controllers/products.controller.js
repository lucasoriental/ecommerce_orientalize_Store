import {
  getAllProductsService,
  getProductByIdService,
  addProductService,
  updateProductService,
  deleteProductService,
} from "../services/products.service.js";

export async function getAllProductsController(req, res) {
  try {
    const allProducts = await getAllProductsService();
    res.status(200).json(allProducts);
    return allProducts;
  } catch (error) {
    console.error("getAllProductsController\n");
    console.error(
      "Something went wrong while fetching all the Products data.\n Error: ",
      error
    );
    res.status(404).json({ message: error.message });
  }
}

export async function getProductByIdController(req, res) {
  const { id } = req.params;
  console.log("Product ID:", id);
  try {
    const productId = await getProductByIdService(id);
    res.status(200).json(productId);
    return productId;
  } catch (error) {
    console.error("getProductByIdController\n");
    console.error(
      "Something went wrong while fetching the Product data by ID.\n Error: ",
      error
    );
    res.status(404).json({ message: error.message });
  }
}

export async function addProductController(req, res) {
  const { name, price, description } = req.body;
  try {
    const newProduct = await addProductService({ name, price, description });
    console.log("New Product Added:", newProduct);
    res.status(201).json({ message: "Product added successfully" });
    return newProduct;
  } catch (error) {
    console.error("addProductController\n");
    console.error("Error adding Product:", error);
    res.status(500).json({ message: "Error adding Product" });
  }
}

export async function updateProductController(req, res) {
  const { name, price, description } = req.body;
  const { existingId } = req.params;
  try {
    const updatedProduct = await updateProductService({
      name,
      price,
      description,
      existingId,
    });
    res.status(200).json({ message: "Product updated successfully" });
    return updatedProduct;
  } catch (error) {
    console.error("updateProductController\n");
    console.error("Error updating Product:", error);
    res.status(500).json({ message: "Error updating Product" });
  }
}

export async function deleteProductController(req, res) {
  const { existingId } = req.params;
  try {
    const deleteProduct = await deleteProductService({ existingId });
    console.log(deleteProduct);
    return deleteProduct;
  } catch (error) {
    console.error("DeleteProductController\n");
    console.error("Error while Deleting Product attempt: ", error);
    res.status(500).json({ message: "Error Deleting Product!" });
  }
}
