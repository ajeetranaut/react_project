# CartLayout Component

The `CartLayout` component serves as the main layout for displaying the shopping cart. It includes `CartItems` for listing individual items and `CartSummary` for displaying the summary information. The component receives data through props to customize the cart items, their text, and the summary.

## Usage

```jsx
import React from "react";
import { CartLayout } from "@/ui"; // Replace with the actual path to the CartLayout component

const ShoppingCartPage = () => {
  // Example props
  const cartItemsText = {
    product: "Product",
    price: "Price",
    quantity: "Quantity",
    subtotal: "Subtotal",
  };

  const cartSummaryText = {
    headerText: "Order Summary",
    subtotalText: "Subtotal",
    shippingText: "Shipping",
    shippingValue: "$5.00", // Customize based on your shipping logic
    totalText: "Total",
    buttonText: "Proceed to Checkout",
  };

  const cartItemsData = [
    // Customize based on your cart logic
    {
      title: "Product Name",
      slug: "product-slug",
      item_key: "unique-key-1",
      featured_image: "/path/to/image.jpg",
      price: "2000", // Price in cents
      quantity: {
        value: 2,
      },
      totals: {
        total: 4000, // Total price for this item
        subtotal: "4000", // Subtotal for this item
      },
    },
    // Add more items as needed
  ];

  const cartSummaryData = {
    subtotal: "4000", // Customize based on your cart logic
    total: "4050", // Customize based on your cart logic
  };

  return (
    <CartLayout
      cartItemsData={cartItemsData}
      cartItemsText={cartItemsText}
      cartSummaryData={cartSummaryData}
      cartSummaryText={cartSummaryText}
    />
  );
};

export default ShoppingCartPage;
```

## Component Details

The `CartLayout` component includes `CartItems` for displaying individual items in the shopping cart and `CartSummary` for summarizing the cart details.

It receives props such as `cartItemsData`, `cartItemsText`, `cartSummaryData`, and `cartSummaryText` to customize the displayed information.

The component defines functions `onRemoveCartItem` and `onUpdateCartItem` to handle the removal and update of cart items, respectively.

It uses the `removeCartItemHandler` and `updateCartItemHandler` utility functions along with toast notifications to handle item removal and update operations.

The `productToast` function is responsible for displaying success toast notifications.

## Note

- Customize the component based on your project's design and functionality requirements.

- Ensure that the necessary dependencies are correctly installed and imported in your project.

- Adjust the paths to icons and images based on your project structure.
