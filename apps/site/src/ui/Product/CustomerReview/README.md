# CustomerReview Component

The `CustomerReview` component is designed to allow customers to submit reviews for a product and view existing reviews. It provides a form for submitting new reviews and displays existing reviews in a scrollable section.

## Usage

```jsx
import React from "react";
import { CustomerReview } from "@/ui"; // Replace with the actual path to the CustomerReview component

const CustomerReviewPage = () => {
  // Example props
  const productId = 123;
  const reviewInputText = {
    header: "Customer Reviews",
    ratingText: "Please rate the product:",
    buttonText: "Submit Review",
  };

  return <CustomerReview productId={productId} reviewInputText={reviewInputText} />;
};

export default CustomerReviewPage;
```

## Component Details

- The `CustomerReview` component receives two props: `productId` (number) and `reviewInputText` (object).
- It displays a scrollable section containing existing reviews (if available) and a form for submitting new reviews.

## Props

- `productId` (number): The unique identifier for the product for which reviews are being submitted.
- `reviewInputText` (object): An object containing the following properties:
  - `header` (string): The header text for the reviews section.
  - `ratingText` (string): The text prompting users to rate the product.
  - `buttonText` (string): The text on the submit button of the review form.

## Form Handling

- The component uses the `react-hook-form` library for form handling.
- It includes form fields for the user's name, email, message (review content), and a star rating.
- When the form is submitted, the data is sent to the server using an Axios request.
- A loading state is used to indicate when the form is being processed.

## Reviews Display

- Existing reviews are fetched using the `useReviews` hook.
- The reviews are displayed in a grid format, and a loader is shown while reviews are being fetched.

## Note

- Customize the component as needed based on your project's design requirements.
- Ensure that you have the necessary styling classes (e.g., `bg-white`, `text-secondary`, etc.) available in your project if used in the component.
