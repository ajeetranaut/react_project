# FilterWithSlider Component

The `FilterWithSlider` component is a React component designed to display a price range slider for filtering purposes. This component is suitable for creating a filter section with a range slider that allows users to select a price range.

## Usage

```jsx
import React from "react";
import { FilterWithSlider } from "@/ui"; // Replace with the actual path to the FilterWithSlider component

const MySliderFilterPage = () => {
  const sliderData = {
    name: "Price Range",
    setPriceRange,
  };

  return <FilterWithSlider {...sliderData} />;
};

export default MySliderFilterPage;
```

## Props

The `FilterWithSlider` component accepts the following props:

- `name` (string): The name or title of the price range filter.
- `setPriceRange` (function): A callback function that is triggered when the user selects a price range. It receives an array of two values representing the selected price range.

## Structure

- The `FilterWithSlider` component consists of a toggle button, a price range filter header, and a range slider.
- Clicking on the toggle button expands or collapses the price range filter section.
- The range slider allows users to select a price range by dragging the slider handles.
- The `setPriceRange` function is called when the user changes the selected price range, passing the array of two values representing the selected price range.

## Note

- Ensure that you provide a valid callback function to the `setPriceRange` prop when using the component in your project.
- Customize the component styles, colors, and structure based on your project requirements.
