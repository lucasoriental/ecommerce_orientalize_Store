import pool from "../config/db.config.js";

export async function getAllProductsModel() {
  try {
    const result = await pool.query("SELECT * FROM products");
    console.log(result.rows);
    if (result.rows.length === 0) {
      return "No Products in the database";
    } else {
      return result.rows;
    }
  } catch (error) {
    console.error("getAllProductsModel\n");
    console.error("Error fetching All Products:", error);
    throw new Error(
      "Something went wrong while fetching all the Products data."
    );
  }
}

export async function getProductByIdModel(id) {
  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      throw new Error("Product not found");
    }
    console.log(result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("getProductByIdModel\n");
    console.error("Error fetching Product by ID:", error);
    throw new Error(
      "Something went wrong while fetching the Product data by ID."
    );
  }
}

export async function addProductModel(productData) {
  const { product_name, product_price, product_description } = productData;
  try {
    const result = await pool.query(
      "INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *",
      [product_name, product_price, product_description]
    );
    /* if (result.rows.length === 0) {
      throw new Error("Product already exists");
    } */
    return result.rows[0];
  } catch (error) {
    console.error("addProductModel\n");
    console.error("Error adding Product:", error);
    throw new Error("Error adding Product");
  }
}

export async function updateProductModel(name, price, description, id) {
  try {
    const result = await pool.query(
      `UPDATE products SET name = $1, price = $2, description = $3 WHERE id = $4 RETURNING *`,
      [name, price, description, id]
    );
    /* if (result.rows.length === 0) {
      throw new Error("Product not found");
    } */
    return result.rows[0];
  } catch (error) {
    console.error("updateProductModel\n");
    console.error("Error updating Product:", error);
    throw new Error("Error updating Product");
  }
}
