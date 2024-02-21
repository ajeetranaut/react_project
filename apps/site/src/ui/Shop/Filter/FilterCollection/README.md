# FilterCollection Component

The `FilterCollection` component is a React component designed to display a collection of filters, including text-based filters, radio filters, and a price range slider. This component is suitable for creating a filter sidebar for product listings.

## Usage

```jsx
import React from "react";
import { FilterCollection } from "@/ui"; // Replace with the actual path to the FilterCollection component

const MyFilterPage = () => {
  const filterData = {
    textData: {
      title: "Filter",
      categoryTitle: "Category",
      colorTitle: "Colors",
      priceTitle: "Price",
    },
    categorydata: [
      { name: "Category 1", id: "1" },
      { name: "Category 2", id: "2" },
      // Add more categories as needed
    ],
    colorAttributeData: [
      { name: "Red", value: "red" },
      { name: "Blue", value: "blue" },
      // Add more color options as needed
    ],
    setColorAttribute,
    setPriceRange,
    setFilterOpen,
    filterOpen: true, // Set the initial state of the filter
  };

  return <FilterCollection {...filterData} />;
};

export default MyFilterPage;
```

## Props

The `FilterCollection` component accepts the following props:

- `textData` : object with `title`, `categoryTitle`,`colorTitle`,`priceTitle` options.
- `categorydata` (array): An array of objects representing category data. Each object should have a `name` and an optional `id`.
- `colorAttributeData` (array): An array of objects representing color attribute data. Each object should have a `name` and an optional `value`.
- `setColorAttribute` (function): A callback function that is triggered when the user selects a color attribute. It receives the selected color value.
- `setPriceRange` (function): A callback function that is triggered when the user selects a price range. It receives an array of two values representing the selected price range.
- `setFilterOpen` (function): A callback function that is triggered when the filter section is opened or closed. It receives a boolean value indicating whether the filter is open or closed.
- `filterOpen` (boolean): A boolean value indicating whether the filter section is open or closed.

## Structure

- The `FilterCollection` component consists of a set of filters, including `FilterWithText`, `FilterWithOnlyRadio`, and `FilterWithSlider`.
- The filters are displayed differently based on the screen size (large devices or small devices).
- The state of the filter section (open or closed) can be controlled by the `filterOpen` prop.
- Callback functions (`setColorAttribute`, `setPriceRange`, `setFilterOpen`) are provided to handle changes in color selection, price range selection, and filter section open/close events.

## Note

- Customize the component styles, colors, and structure based on your project requirements.
- Ensure that you provide valid callback functions to the relevant props when using the component in your project.
