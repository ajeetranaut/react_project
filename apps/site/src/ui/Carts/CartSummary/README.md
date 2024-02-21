# CartSummary Component

The `CartSummary` component is designed to display a summary of the shopping cart, including the subtotal, shipping cost, and total. It also provides a button to proceed to checkout. The component receives data through props to customize the displayed text and values.

## Usage

```jsx
import React from "react";
import { CartSummary } from "@/ui"; // Replace with the actual path to the CartSummary component

const ShoppingCartPage = () => {
  // Example props
  const textData = {
    headerText: "Order Summary",
    subtotalText: "Subtotal",
    shippingText: "Shipping",
    shippingValue: "$5.00", // Customize based on your shipping logic
    totalText: "Total",
    buttonText: "Proceed to Checkout",
  };

  const summaryData = {
    subtotal: "119", // Customize based on your cart logic
    total: "119.00", // Customize based on your cart logic
  };

  return <CartSummary textData={textData} summaryData={summaryData} />;
};

export default ShoppingCartPage;
```

## Component Details

- The `CartSummary` component receives props such as `textData` (an object containing text values for headers and labels) and `summaryData` (an object containing numerical values for the subtotal and total).

- It uses the `convertPrice` function to format numerical prices with two decimal places.

- The component displays the header, subtotal, shipping cost, and total in a clear and organized format.

- It provides a button with a link to the checkout page.

## Props

- `textData` (object): An object containing text values for headers and labels. It includes `headerText`, `subtotalText`, `shippingText`, `shippingValue`, `totalText`, and `buttonText`.

- `summaryData` (object): An object containing numerical values for the subtotal and total. It includes `subtotal` and `total`.

## Note

- Customize the component based on your project's design and functionality requirements.

- Ensure that the necessary dependencies are correctly installed and imported in your project.

- Adjust the paths to icons and images based on your project structure.
