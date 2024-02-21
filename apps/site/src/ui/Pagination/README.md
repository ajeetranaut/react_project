# Pagination Component

The `Pagination` component is a React component designed to display a pagination control using the `react-paginate` library. This component is suitable for paginating data, such as product listings, where you need to navigate through multiple pages.

## Usage

```jsx
import React from "react";
import { Pagination } from "@/ui"; // Replace with the actual path to the Pagination component

const MyPaginatedPage = () => {
  const paginationData = {
    totalCount: 100, // Replace with the total count of items
    showPerPage: 10, // Replace with the number of items to show per page
    handlePageChange,
  };

  return <Pagination {...paginationData} />;
};

export default MyPaginatedPage;
```

## Props

The `Pagination` component accepts the following props:

- `totalCount` (number): The total count of items across all pages.
- `showPerPage` (number): The number of items to display per page.
- `handlePageChange` (function): A callback function that is triggered when a new page is selected. It receives an object containing the selected page index.

## Structure

- The `Pagination` component uses the `react-paginate` library to create a paginated control.
- It calculates the total number of pages based on the `totalCount` and `showPerPage` props.
- The `handlePageChange` prop is a callback function triggered when the user selects a new page. It receives an object containing the selected page index.

## Note

- Customize the component styles, colors, and structure based on your project requirements.
- Ensure that you provide a valid `handlePageChange` callback function when using the component in your project. This function should handle the logic for updating the displayed content based on the selected page.
- Make sure to replace the `totalCount` and `showPerPage` values with the actual counts in your application.
