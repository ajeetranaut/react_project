# PageContent Component

The `PageContent` component is designed to display the main content of a page. It has a conditional class that determines its width based on whether a sidebar is present or not. The component utilizes Tailwind CSS classes for styling.

## Usage

```jsx
import React from "react";
import { PageContent } from "@/ui"; // Replace with the actual path to the PageContent component

const MyPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <PageContent sidebar="yes">
        {/* Your main page content goes here */}
        <h1>Main Content</h1>
      </PageContent>
    </div>
  );
};

export default MyPage;
```

## Props

The `PageContent` component accepts the following props:

- `children` (React.ReactNode): The content to be displayed within the `PageContent` component.
- `sidebar` ("yes" | "no"): A string indicating whether a sidebar is present. If set to "yes," the component will have a smaller width; otherwise, it will take the full width.

## Structure

- The component uses a conditional class based on the `sidebar` prop to determine its width.
- The class is applied using the Tailwind CSS utility classes.

## Note

- This component is part of a layout system where the page is divided into a main content area and an optional sidebar.
- Ensure that you pass the correct `sidebar` prop value ("yes" or "no") to achieve the desired layout.
- Customize the component styles and structure based on your project requirements.
