# ProductDetails Component

The `ProductDetails` component combines the `ImageGallery`, `ProductShortDescription`, and `CartAndBuy` components to display detailed information about a product, including images, attributes, pricing, and options to add to cart or buy now.

## Usage

```jsx
import React from "react";
import { ProductDetails } from "@/ui"; // Replace with the actual path to the ProductDetails component

const ProductDetailsPage = () => {
  // Example data and button text
  const productData = {
    image: [
      {
        src: "product-image-url",
        alt: "Product Image Alt Text",
      },
      // Add more images if needed
    ],
    discount: 10, // Example discount percentage
    id: 1,
    name: "Product Name",
    short_description: "Short product description.",
    regular_price: "50.00",
    sale_price: "45.00",
    price: "45.00",
    stock: "inStock",
    rating: 4.5,
    reviews: 10,
    attributes: [
      {
        name: "color",
        options: ["red", "blue", "green"],
      },
      // Add more attributes if needed
    ],
  };

  const buttonText = {
    addCart: "Add to Cart",
    buyNow: "Buy Now",
  };

  const detailsText = {
    colorTitle: "COLORS",
    socialTitle: "Share On",
    reviewsText: "reviews",
  };

  return <ProductDetails data={productData} buttonText={buttonText} detailsText={detailsText} />;
};

export default ProductDetailsPage;
```

## Component Details

- The `ProductDetails` component includes the `ImageGallery` component for displaying product images, the `ProductShortDescription` component for showing product details, and the `CartAndBuy` component for handling cart and buy actions.
- It passes the necessary data and button text to each of these components.

## Props

- `data` (Object): An object containing detailed information about the product, including images, pricing, stock status, rating, and attributes.
- `buttonText` (Object): An object with properties `addCart` and `buyNow` representing the text for the respective buttons.
- `detailsText` (Object): An object containing information about the product, including `colorTitle`, `socialTitle` and `reviewsText`.

## Note

- Adjust the component styles based on your project's design requirements.
- Ensure that you have the necessary components (`ImageGallery`, `ProductShortDescription`, `CartAndBuy`, etc.) available in your project.
- Customize or extend the component as needed to fit your specific requirements.
