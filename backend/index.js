import express from "express";
import cors from "cors";

import products from "./routes/products.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle CORS
// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

app.use("/api/products/", products);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
