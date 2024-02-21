# FilterWithText Component

The `FilterWithText` component is a React component designed to display a filter with a toggle button and a list of filter items. This component is suitable for creating a filter section with expandable/collapsible content.

## Usage

```jsx
import React from "react";
import { FilterWithText } from "@/ui"; // Replace with the actual path to the FilterWithText component

const MyFilterPage = () => {
  const filterData = {
    name: "Filter Name",
    filterItems: [
      { name: "Mobile", id: "1" },
      { name: "Electronics", id: "2" },
      // Add more filter items as needed
    ],
  };

  return <FilterWithText {...filterData} />;
};

export default MyFilterPage;
```

## Props

The `FilterWithText` component accepts the following props:

- `name` (string): The name or title of the filter.
- `filterItems` (array of objects): An array containing filter items to be displayed.
  - Each filter item object should have a `name` property representing the item's name and an optional `id` property for the item's identifier.

## Structure

- The `FilterWithText` component consists of a toggle button and a list of filter items.
- Clicking on the toggle button expands or collapses the filter items section.
- Each filter item is a clickable link that can navigate to a specified URL.

## Note

- Ensure that you provide actual data to the `FilterWithText` component when using it in your project.
- Customize the component styles, icons, and structure based on your project requirements.
