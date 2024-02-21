# ProductHeader Component

The `ProductHeader` component is a React component designed to display a header section for product listings, including information about the number of results shown, filter options, and sorting options.

## Usage

```jsx
import React from "react";
import { ProductHeader } from "@/ui"; // Replace with the actual path to the ProductHeader component

const MyProductListPage = () => {
  const productHeaderData = {
    textData: {
      filterButton: "Filter",
      showText: {
          showing: "Showing",
          of: "of",
          results: "results"
        },
      textType: "en"
    }
    totalProductShow: 25,
    totalProductCount: 56,
    showOptionsData: {
      en: [
        {
          name: "Show 12",
          value: 12,
        },
        {
          name: "Show 24",
          value: 24,
        },
      ],
      //..and others language want to use
    },
    sortOptionsData: {
      en: [
        {
          name: "Default Sorting",
          value: "date",
        },
        {
          name: "Average Rating",
          value: "rating",
        },
      ],
      //..and others language want to use
    },
    // ... other props
  };

  return <ProductHeader {...productHeaderData} />;
};

export default MyProductListPage;
```

## Props

The `ProductHeader` component accepts the following props:

- `textData` : object with `filterButton`, `showText` object with `showing`, `of`, `results` options , `textType` options.
- `totalProductShow` (number): The number of products currently being displayed.
- `totalProductCount` (number): The total number of products available.
- `setFilterOpen` (function): A function to toggle the filter options.
- `filterOpen` (boolean, optional): Indicates whether the filter options are open.
- `setpage` (function): A function to set the current page.
- `setSort` (function): A function to set the sorting option.
- `productActive` (number): Indicates the active product view (0 or 1).
- `setProductActive` (function): A function to set the active product view.
- `showOptionsData` object with language name value with (array of objects): An array of show options with `name` and `value`.
- `sortOptionsData` object with language name value with(array of objects): An array of sort options with `name` and `value`.

## Sections

### Large Device

- Displays information about the number of results shown and the total number of products.
- Offers options for filtering, showing, and sorting products.
- Allows switching between two product views.

### Small Device

- Displays a simplified version of the header for small devices.
- Provides options for filtering, showing, and sorting products.

## Note

- Ensure that you provide actual data to the `ProductHeader` component when using it in your project.
- Customize the component styles, icons, and structure based on your project requirements.
