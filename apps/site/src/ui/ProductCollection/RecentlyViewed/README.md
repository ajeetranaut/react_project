# RecentlyViewed Component

The `RecentlyViewed` component is a React component designed to display a section of recently viewed products. It includes a title, a grid of `TrendingProductCard` components showcasing product information, and a button to view more. This component is suitable for engaging users with their recent product views.

## Usage

```jsx
import React from "react";
import { RecentlyViewed } from "@/ui"; // Replace with the actual path to the RecentlyViewed component

const MyPage = () => {
  const recentlyViewedData = [
    // ... your recently viewed product data here
  ];

  return <RecentlyViewed data={recentlyViewedData} />;
};

export default MyPage;
```

## Props

The `RecentlyViewed` component accepts the following props:

- `title` (string): The title for the recently viewed section. Defaults to "Recently Viewed".
- `data` (array of objects or null): An array containing objects with product information similar to the data required by the `TrendingProductCard` component. If set to `null`, the component will display loading skeleton elements.
- `link` (string): The link to navigate when the "View More" button is clicked. Defaults to "/recently-viewed".
- `buttonText` (string): The text for the "View More" button. Defaults to "View More".

## Default Props

The `RecentlyViewed` component has default data provided through a `data.json` file. You can use this default data for testing the component or replace it with your own recently viewed product data.

## Loading Skeleton

The component uses the `TrendingProductCard` component to display recently viewed product cards. If data is not available, loading skeleton elements will be shown for each card.

Feel free to customize the component and loading skeleton as needed for your project.

## Note

Ensure that you provide actual recently viewed product data to the `data` prop when using the component. The default data is only for testing purposes. Customize the component styles and structure based on your project requirements.
