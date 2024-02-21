# ProductShortDescription Component

The `ProductShortDescription` component is designed to display a brief overview of a product, including its name, pricing information, rating, reviews, stock status, and a short description.

## Usage

```jsx
import React from "react";
import { ProductShortDescription } from "@/ui"; // Replace with the actual path to the ProductShortDescription component

const MyProduct = () => {
  // Example data
  const productData = {
    id: 1,
    name: "Sample Product",
    short_description: "<p>Short description of the product.</p>",
    regular_price: "50.00",
    sale_price: "40.00",
    price: "40.00",
    stock: "In Stock",
    rating: 4.5,
    reviews: 10,
  };

  return <ProductShortDescription data={productData} reviewsText={"reviews"} />;
};

export default MyProduct;
```

## Component Details

- The `ProductShortDescription` component provides a concise overview of a product, including its name, pricing, rating, reviews, and stock status.
- If the product data is not provided or is incomplete, loading skeletons are displayed to indicate that the data is being fetched.
- The short description may contain HTML tags, and the component uses regular expressions to remove paragraph tags (`<p>` and `</p>`) for a cleaner display.

## Props

- `data` (Object): An object containing the product information with the following properties:
  - `id` (Number): Product ID.
  - `name` (String): Product name.
  - `short_description` (String): Short description of the product, which may contain HTML tags.
  - `regular_price` (String): Regular price of the product.
  - `sale_price` (String): Sale price of the product.
  - `price` (String): Default price if there is no sale.
  - `stock` (String): Stock status.
  - `rating` (Number): Product rating.
  - `reviews` (Number): Number of reviews.
- `reviewsText` (String): A text value for review text.

## Note

- Customize the component styles based on your project's design requirements.
- The component uses Tailwind CSS classes for styling. Make sure to configure Tailwind CSS in your project for the styles to take effect.
- Feel free to modify or extend the component based on your specific requirements.
