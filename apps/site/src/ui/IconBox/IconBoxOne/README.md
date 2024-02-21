# IconBoxOne Component

The `IconBoxOne` component is a React component designed to display a grid of icon boxes with titles and descriptions. It provides support for loading skeleton elements when data is not available.
This component is useful for showcasing features, services, or information in a visually appealing way.

## Usage

```jsx
import React from "react";
import { IconBoxOne } from "@/ui"; // Replace with the actual path to the IconBoxOne component

const MyPage = () => {
  const myData = [
    // ... your data here
  ];

  return <IconBoxOne data={myData} />;
};

export default MyPage;
```

## Props

The `IconBoxOne` component accepts the following props:

- `data` (array of objects or null): An array containing objects with `icon`, `title`, and `description` properties. If set to `null`, the component will display loading skeleton elements.

## Default Props

The `IconBoxOne` component has default data provided through a `data` file. You can use this default data for testing the component or replace it with your own data.

## Loading Skeleton

The component uses the `Skeleton` and `SkeletonTheme` components from the `react-loading-skeleton` library to provide a loading skeleton effect when data is not available.

Feel free to customize the component and the loading skeleton as needed for your project.

## Note

Make sure to provide the actual data to the `data` prop when using the component. The default data is only for testing purposes.