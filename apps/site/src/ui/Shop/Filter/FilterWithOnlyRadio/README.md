# FilterWithOnlyRadio Component

The `FilterWithOnlyRadio` component is a React component designed to display a filter with radio buttons and a toggle button. This component is suitable for creating a filter section with a list of options that users can choose from.

## Usage

```jsx
import React from "react";
import { FilterWithOnlyRadio } from "@/ui"; // Replace with the actual path to the FilterWithOnlyRadio component

const MyRadioFilterPage = () => {
  const filterData = {
    name: "Radio Filter Name",
    filterItems: [
      { name: "black", value: 36 },
      { name: "blue", value: 31 },
      { name: "brown", value: 39 },
      { name: "green", value: 32 },
      // Add more filter options as needed
    ],
    setValue: (value) => console.log(`Selected value: ${value}`),
  };

  return <FilterWithOnlyRadio {...filterData} />;
};

export default MyRadioFilterPage;
```

## Props

The `FilterWithOnlyRadio` component accepts the following props:

- `name` (string): The name or title of the radio filter.
- `filterItems` (array of objects): An array containing radio filter options to be displayed.
  - Each filter option object should have a `name` property representing the option's name and an optional `value` property for the option's value.
- `setValue` (function): A callback function that is triggered when a radio button is selected. It receives the selected value as an argument.

## Structure

- The `FilterWithOnlyRadio` component consists of a toggle button, a radio filter header, and a list of radio filter options.
- Clicking on the toggle button expands or collapses the radio filter options section.
- Each radio filter option is represented by a radio button that users can select.
- The `setValue` function is called when a radio button is selected, passing the selected value as an argument.

## Note

- Ensure that you provide actual data and a valid callback function to the `FilterWithOnlyRadio` component when using it in your project.
- Customize the component styles, icons, and structure based on your project requirements.
