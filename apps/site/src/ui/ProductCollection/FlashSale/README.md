# FlashSale Component

The `FlashSale` component is a React component designed to showcase a flash sale section on your website. It includes a title, a button to view all deals, and a grid of `TrendingProductCard` components displaying flash sale product information. The component also supports default data for testing and loading skeleton elements.

This component is useful for highlighting special promotions, discounts, or best-selling products in a visually appealing way.

## Usage

```jsx
import React from "react";
import { FlashSale } from "@/ui"; // Replace with the actual path to the FlashSale component

const MyPage = () => {
  const flashSaleData = [
    // ... your flash sale product data here
  ];

  return (
    <FlashSale
      sectionTitle="Our Best Selling Products"
      buttonText="View All Deals"
      buttonLink="/shop"
      data={flashSaleData}
    />
  );
};

export default MyPage;
```

## Props

The `FlashSale` component accepts the following props:

- `sectionTitle` (string): The title for the flash sale section. Defaults to "Our Best Selling Products".
- `buttonText` (string): The text for the button to view all deals. Defaults to "View All Deals".
- `buttonLink` (string): The link to navigate when the button is clicked. Defaults to "/shop".
- `data` (array of objects): An array containing objects with product information similar to the data required by the `TrendingProductCard` component.

## Default Props

The `FlashSale` component has default data provided through a `data.json` file. You can use this default data for testing the component or replace it with your own flash sale product data.

## Loading Skeleton

The component utilizes the `TrendingProductCard` component to display flash sale product cards. If data is not available, loading skeleton elements will be shown for each card.

Feel free to customize the component and loading skeleton as needed for your project.

## Note

Ensure that you provide actual flash sale product data to the `data` prop when using the component. The default data is only for testing purposes. Customize the component styles and structure based on your project requirements.
