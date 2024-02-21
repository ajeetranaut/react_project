# BreadcrumbOne Component

The `BreadcrumbOne` component is a React component designed to display a breadcrumb navigation for your webpage. It dynamically generates breadcrumb links based on the current route, allowing users to
navigate back to previous pages. This component is particularly useful for enhancing user experience and navigation within your application.

## Usage

```jsx
import React from "react";
import { BreadcrumbOne } from "@/ui"; // Replace with the actual path to the BreadcrumbOne component

const MyPage = () => {
  const breadcrumbData = {
    title: "Page Title",
  };

  return <BreadcrumbOne {...breadcrumbData} />;
};

export default MyPage;
```

## Props

The `BreadcrumbOne` component accepts the following props:

- `title` (string): The main title for the current page.

## Default Props

The `BreadcrumbOne` component has default data provided through a `data.json` file. You can use this default data for testing the component or replace it with your own page title.

## Breadcrumb Navigation

The breadcrumb navigation is dynamically generated based on the current route using the `next/useRouter` hook. It automatically splits the route into segments and displays them as
clickable links, allowing users to navigate back to previous pages.

## Note

Make sure to provide the actual data to the `title` props when using the component. The default data is only for testing purposes.
