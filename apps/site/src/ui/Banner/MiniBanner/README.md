# MiniBanner Component

The `MiniBanner` component is a React component designed to display a mini banner section featuring category information, titles, prices, and images. This component is ideal for showcasing promotional items or special offers in a visually appealing way.

## Usage

```jsx
import React from "react";
import { MiniBanner } from "@/ui"; // Replace with the actual path to the MiniBanner component

const MyPage = () => {
  const miniBannerData = [
    // ... your mini banner data here
  ];

  return <MiniBanner data={miniBannerData} />;
};

export default MyPage;
```

## Props

The `MiniBanner` component accepts the following prop:

- `data` (array of objects): An array containing objects with `category`, `title`, `image`, and `price` properties. Each object represents a mini banner item.

## Default Props

The `MiniBanner` component has default data provided through a `data.json` file. You can use this default data for testing the component or replace it with your own mini banner data.

## Loading Skeleton

The component uses the `Skeleton` component from the `react-loading-skeleton` library to provide a loading skeleton effect when data is not available. Loading skeletons are displayed for category, title, price, and image sections.

Feel free to customize the component and the loading skeleton as needed for your project.

## Note

Ensure that you provide actual mini banner data to the `data` prop when using the component. The default data is only for testing purposes. Customize the component styles and structure based on your project requirements.
