# ProductDescription Component

The `ProductDescription` component is designed to display different aspects of a product, such as its description, additional information, and customer reviews. Users can switch between these views using tabs. The component also handles loading states and displays skeleton loaders when necessary.

## Usage

```jsx
import React from "react";
import { ProductDescription } from "@/ui"; // Replace with the actual path to the ProductDescription component

const ProductDescriptionPage = () => {
  // Example props
  const data = {
    // ... product data
  };
  const isLoading = false;
  const headingTitle = {
    description: "Description",
    additionalInfo: "Additional Info",
    review: "Customer Reviews",
  };
  const reviewInputText = {
    header: "Customer Reviews",
    ratingText: "Please rate the product:",
    buttonText: "Submit Review",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    reviewPlaceholder: "Write your review...",
  };

  return (
    <ProductDescription
      data={data}
      isLoading={isLoading}
      headingTitle={headingTitle}
      reviewInputText={reviewInputText}
    />
  );
};

export default ProductDescriptionPage;
```

## Component Details

- The `ProductDescription` component receives several props, including `data` (object), `isLoading` (boolean), `headingTitle` (object), and `reviewInputText` (object).
- It displays a section with tabs for "Description," "Additional Info," and "Customer Reviews."
- The active tab is controlled by the `active` state variable.
- The component handles loading states and displays skeleton loaders when necessary.

## Props

- `data` (object): The product data, including various details like description, attributes, etc.
- `isLoading` (boolean): Indicates whether the component is in a loading state.
- `headingTitle` (object): An object containing the titles for different tabs. Example: `{ description: "Description", additionalInfo: "Additional Info", review: "Customer Reviews" }`.
- `reviewInputText` (object): An object containing the text for the review input section. Example: `{ header: "Customer Reviews", ratingText: "Please rate the product:", buttonText: "Submit Review", namePlaceholder: "Your Name", emailPlaceholder: "Your Email", reviewPlaceholder: "Write your review..." }`.

## Loading States

- The component checks the `isLoading` prop to determine whether to display skeleton loaders.
- Loading states are handled separately for the different tabs.

## Tab Navigation

- Users can switch between tabs by clicking on the corresponding headers.
- The `active` state variable is used to determine which tab is currently active.

## Note

- Customize the component as needed based on your project's design requirements.
- Ensure that you have the necessary styling classes (e.g., `bg-white`, `text-secondary`, etc.) available in your project if used in the component.
