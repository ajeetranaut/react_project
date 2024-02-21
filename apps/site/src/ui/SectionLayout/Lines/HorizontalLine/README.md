# HorizontalLine Component

The `HorizontalLine` component is a simple React component that renders a horizontal line. It uses Tailwind CSS classes to style the line with a specific border color and thickness.

## Usage

```jsx
import React from "react";
import { HorizontalLine } from "@/ui"; // Replace with the actual path to the HorizontalLine component

const MyComponent = () => {
  return (
    <div>
      <p>Some content above the horizontal line.</p>
      <HorizontalLine />
      <p>Some content below the horizontal line.</p>
    </div>
  );
};

export default MyComponent;
```

## Component Details

- The `HorizontalLine` component consists of a single `hr` (horizontal rule) element.
- It applies the following Tailwind CSS classes:
  - `container`: Centers the line within its container.
  - `mx-auto`: Applies horizontal margin to center the line.
  - `border-t`: Sets a border on the top side of the line.
  - `border-neutral-content`: Sets the border color to a theme-specific color (adjust as needed).

## Note

- Ensure that you have the appropriate Tailwind CSS styles configured in your project for the classes used in the `HorizontalLine` component to take effect.
- Customize the component styles based on your project's design requirements.
- Feel free to adjust the Tailwind CSS classes or add additional styles to meet your specific needs.
