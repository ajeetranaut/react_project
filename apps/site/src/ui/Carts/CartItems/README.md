# CartItems Component

The `CartItems` component is designed to display a list of items in a shopping cart. It provides a detailed view of each item, including its image, title, price, quantity, and subtotal. The component supports responsive design for both large and small screens.

## Usage

```jsx
import React from "react";
import { CartItems } from "@/ui"; // Replace with the actual path to the CartItems component

const ShoppingCartPage = () => {
  // Example props
  const headerText = {
    product: "Product",
    price: "Price",
    quantity: "Quantity",
    subtotal: "Subtotal",
  };

  const itemsData = [
    {
      title: "Product 1",
      slug: "product-1",
      item_key: "item-1",
      featured_image: "/images/product1.jpg",
      price: "1000",
      quantity: {
        value: 2,
      },
      totals: {
        total: 2000,
        subtotal: "2000",
      },
    },
    // Add more items as needed
  ];

  const onRemoveCartItem = (itemKey) => {
    // Logic to remove the item from the cart
  };

  const onUpdateCartItem = (itemKey, count) => {
    // Logic to update the quantity of the item in the cart
  };

  return (
    <CartItems
      headerText={headerText}
      itemsData={itemsData}
      onRemoveCartItem={onRemoveCartItem}
      onUpdateCartItem={onUpdateCartItem}
    />
  );
};

export default ShoppingCartPage;
```

## Component Details

- The `CartItems` component receives props such as `headerText` (text for headers), `itemsData` (an array of item details), `onRemoveCartItem` (function to handle item removal), and `onUpdateCartItem` (function to handle quantity updates).

- The component includes responsive layouts for both large and small screens.

- It uses icons from the `react-icons` library for the remove, plus, and minus buttons.

- The `convertPrice` function is used to convert the price from cents to dollars with two decimal places.

## Props

- `headerText` (object): An object containing text for headers, including `product`, `price`, `quantity`, and `subtotal`.

- `itemsData` (array): An array of objects, where each object represents an item in the cart. Each item should have properties such as `title`, `slug`, `item_key`, `featured_image`, `price`, `quantity`, and `totals`.

- `onRemoveCartItem` (function): A function to handle the removal of an item from the cart. It receives the `item_key` as a parameter.

- `onUpdateCartItem` (function): A function to handle the update of an item's quantity in the cart. It receives `item_key` and `count` as parameters.

## Note

- Customize the component based on your project's design and functionality requirements.

- Ensure that the necessary dependencies, such as `react-icons` and `next/image`, are correctly installed and imported in your project.

- Adjust the paths to icons and images based on your project structure.
