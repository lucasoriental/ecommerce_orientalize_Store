import pool from "../config/db.config.js";

export async function setupTables(req, res) {
  try {
    const result = await pool.query(
      "CREATE TABLE IF NOT EXISTS cart_items (item_id SERIAL PRIMARY KEY, cart_id INT NOT NULL REFERENCES cart(cart_id) ON DELETE CASCADE, product_id INT NOT NULL, quantity INT NOT NULL CHECK (quantity > 0), price DECIMAL(10, 2) NOT NULL, added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"
    );
    console.log("Cart items table created or already exists:", result.command);
  } catch (error) {
    console.error("Error setting up users table:", error);
  }
}
