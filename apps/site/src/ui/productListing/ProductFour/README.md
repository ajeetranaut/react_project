# ProductFour Component

The `ProductFour` component is a React component designed to display a section of product cards using the `ProductCardTwo` component from the `@/ui` library. This component is suitable for showcasing multiple products in a grid layout.

## Usage

```jsx
import React from "react";
import { ProductFour } from "@/ui"; // Replace with the actual path to the ProductFour component

const MyProductPage = () => {
  const productData = [
    {
      id: 1,
      name: "Product Name 1",
      slug: "product-name-1",
      image: [
        {
          src: "/path/to/image1.jpg",
          alt: "Product Image 1",
        },
      ],
      price: "19.99",
      sale_price: "15.99",
      regular_price: "24.99",
      discount: 20,
      reviews: "2",
      rating: 4.5,
      short_description: "product description",
    },
    // Add more product data as needed
  ];

  return <ProductFour data={productData} />;
};

export default MyProductPage;
```

## Props

The `ProductFour` component accepts the following props:

- `data` (array of objects): An array containing product details for each card.
  - Each product object should have the same structure as the `data` prop for the `ProductCardTwo` component.

## Structure

- The `ProductFour` component iterates over the provided product data and renders individual `ProductCardTwo` components for each product.
- The product cards are displayed in a grid layout.

## Note

- Ensure that you provide actual data to the `ProductFour` component when using it in your project.
- Customize the component styles, icons, and structure based on your project requirements.
