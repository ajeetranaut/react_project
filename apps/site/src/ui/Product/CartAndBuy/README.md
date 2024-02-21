# CartAndBuy Component

The `CartAndBuy` component provides functionality for users to add items to their cart or proceed with a quick buy. It includes options to select product attributes such as color and quantity.

## Usage

```jsx
import React from "react";
import { CartAndBuy } from "@/ui"; // Replace with the actual path to the CartAndBuy component

const ProductDetailsPage = () => {
  // Example data and button text
  const productData = {
    id: 1,
    attributes: [
      {
        name: "color",
        options: ["red"],
      },
    ],
    stock: "inStock",
  };

  const buttonText = {
    addCart: "Add to Cart",
    buyNow: "Buy Now",
  };

  const detailsText = {
    colorTitle: "COLORS",
    socialTitle: "Share On",
  };

  return <CartAndBuy data={productData} buttonText={buttonText} detailsText={detailsText} />;
};

export default ProductDetailsPage;
```

## Component Details

- The `CartAndBuy` component allows users to select product attributes (e.g., color) and adjust the quantity.
- It includes buttons to add the item to the cart and proceed with a quick buy.
- The component uses loading states to provide feedback to users while processing their actions.
- The `SocialShare` component is included to allow users to share the product details on social media.

## Props

- `data` (Object): An object containing information about the product, including `id`, `attributes`, and `stock`.
- `buttonText` (Object): An object with properties `addCart` and `buyNow` representing the text for the respective buttons.
- `detailsText` (Object): An object containing information about the product, including `colorTitle`, `socialTitle`.

## Note

- Customize the component styles based on your project's design requirements.
- Ensure that you have appropriate functions (`addToCartHandler`, `addBuyNowHandler`, etc.) defined in your project for handling the cart and buy actions.
- Modify or extend the component as needed to fit your specific requirements.
