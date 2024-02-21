# BlockLayout Component

The `BlockLayout` component is a versatile layout component designed for flexible arrangement of content blocks. It allows you to easily switch between a columnar or row-based layout, providing responsiveness to different screen sizes.

## Usage

```jsx
import React from "react";
import { BlockLayout } from "@/ui"; // Replace with the actual path to the BlockLayout component

const MyComponent = () => {
  return (
    <BlockLayout Reverse="no">
      {/* Content blocks go here */}
      <div className="block">{/* Content for the first block */}</div>
      <div className="block">{/* Content for the second block */}</div>
    </BlockLayout>
  );
};

export default MyComponent;
```

## Component Details

- The `BlockLayout` component supports two main configurations:
  - When `Reverse` is set to `"no"` (default), it displays content blocks in a columnar layout on smaller screens and a row-based layout on larger screens.
  - When `Reverse` is set to `"yes"`, it reverses the layout, displaying content blocks in a row-based layout on smaller screens and a columnar layout on larger screens.
- It applies Tailwind CSS classes to control the flex layout, spacing, and responsiveness.
- The `container`, `mx-auto`, and `px-5 sm:px-0` classes ensure proper centering and padding.

## Props

- `children` (React.ReactNode): Content blocks to be rendered inside the layout.
- `Reverse` ("yes" | "no"): Controls the layout direction. Set to "yes" for reversed layout, and "no" for the default layout.

## Note

- Ensure that you have the appropriate Tailwind CSS styles configured in your project for the classes used in the `BlockLayout` component to take effect.
- Customize the component styles based on your project's design requirements.
- Feel free to modify or extend the Tailwind CSS classes based on your specific layout needs.
