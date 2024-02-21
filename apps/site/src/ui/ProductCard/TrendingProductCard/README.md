# TrendingProductCard Component

The `TrendingProductCard` component is a React component designed to display trending product information, including images, names, prices, discounts, and ratings. It also provides support for loading skeleton elements when data is not available.

This component is suitable for showcasing trending products in a visually appealing way on your e-commerce or product showcase website

## Usage

```jsx
import React from "react";
import { TrendingProductCard } from "@/ui"; // Replace with the actual path to the TrendingProductCard component

const MyPage = () => {
  const myProductData = [
    // ... your product data here
  ];

  return <TrendingProductCard data={myProductData} />;
};

export default MyPage;
```

## Props

The `TrendingProductCard` component accepts the following prop:

`data` (object or null): An object containing product information such as `id`, `name`, `slug`, `image`, `price`, `sale_price`, `regular_price`, `discount`, `reviews`, and `rating`. If set to null, the component will display loading skeleton elements.

## Default Props

The `TrendingProductCard` component has default data provided through a `data.json` file. You can use this default data for testing the component or replace it with your own data.

## Loading Skeleton

The component uses the `Skeleton` component from the react-loading-skeleton library to provide a loading skeleton effect when data is not available. The skeleton is displayed for image, name, price, and rating sections.

Feel free to customize the component and the loading skeleton as needed for your project.

## Note

Make sure to provide actual product data to the `data` prop when using the component. The default data is only for testing purposes. Customize the component styles and structure based on your project requirements.
