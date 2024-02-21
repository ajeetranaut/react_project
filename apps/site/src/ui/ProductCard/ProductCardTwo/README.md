# ProductCardTwo Component

The `ProductCardTwo` component is a React component designed to display a product card with an image, product details, and pricing. This card is suitable for product listings or featured product displays.

## Usage

```jsx
import React from "react";
import { ProductCardTwo } from "@/ui"; // Replace with the actual path to the ProductCardTwo component

const MyProductPage = () => {
  const productData = {
    id: 1,
    name: "Product Name",
    slug: "product-name",
    image: [
      {
        src: "/path/to/image.jpg",
        alt: "Product Image",
      },
    ],
    price: "19.99",
    sale_price: "15.99",
    regular_price: "24.99",
    discount: 20,
    reviews: "2",
    rating: 4.5,
    short_description: "<p>Short description of the product...</p>",
  };

  return <ProductCardTwo data={productData} />;
};

export default MyProductPage;
```

## Props

The `ProductCardTwo` component accepts the following props:

- `data` (object): An object containing product details.
  - `id` (number): The unique identifier for the product.
  - `name` (string): The name of the product.
  - `slug` (string): The slug for generating the product link.
  - `image` (array of objects): An array containing image details.
    - `src` (string): The source path of the product image.
    - `alt` (string): The alternative text for the image.
  - `price` (string, optional): The current price of the product.
  - `sale_price` (string, optional): The discounted price of the product.
  - `regular_price` (string, optional): The regular price of the product.
  - `discount` (number, optional): The discount percentage applied to the product.
  - `reviews` (string, optional): The number of reviews for the product.
  - `rating` (number, optional): The rating of the product.
  - `short_description` (string, optional): A short description of the product.

## Structure

- The product card consists of an image section on the left and product details on the right.
- The card includes the product name, short description, pricing information, and a star rating with the number of reviews.

## Note

- Ensure that you provide actual data to the `ProductCardTwo` component when using it in your project.
- Customize the component styles, icons, and structure based on your project requirements.
