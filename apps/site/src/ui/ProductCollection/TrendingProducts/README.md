# TrendingProducts Component

The `TrendingProducts` component is a React component designed to showcase a section of trending products with tab navigation. It includes a tab bar for different product categories, a grid of `TrendingProductCard` components displaying product information, and a button to view all products. This component is useful for presenting a variety of trending products in an organized and visually appealing manner.

## Usage

```jsx
import React, { useState } from "react";
import { TrendingProducts } from "@/ui"; // Replace with the actual path to the TrendingProducts component

const MyPage = () => {
  const [active, setActive] = useState(0);

  const trendingProductsData = [
    // ... your trending products data here
  ];

  return <TrendingProducts data={trendingProductsData} active={active} setActive={setActive} />;
};

export default MyPage;
```

## Props

The `TrendingProducts` component accepts the following props:

- `active` (any): The index of the currently active tab.
- `setActive` (function): A function to set the active tab index.
- `data` (array of objects): An array containing objects with product information similar to the data required by the `TrendingProductCard` component.

## Default Props

The `TrendingProducts` component has default data provided through the `data` file. You can use this default data for testing the component or replace it with your own trending products data.

## Tab Navigation

The component includes a tab bar with different product categories. Clicking on a tab updates the displayed products accordingly.

## View All Products

The component provides a "View All Products" button that redirects to the "/shop" page when clicked.

## Note

Ensure that you provide actual trending products data to the `data` prop when using the component. Customize the component styles, tab functionality, and structure based on your project requirements.
