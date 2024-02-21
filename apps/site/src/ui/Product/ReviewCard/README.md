# ReviewCard Component

The `ReviewCard` component is designed to display a review card with user details, a rating, and review content. It takes a `data` prop containing information about the review and renders a styled card.

## Usage

```jsx
import React from "react";
import { ReviewCard } from "@/ui"; // Replace with the actual path to the ReviewCard component

const ReviewCardPage = () => {
  // Example review data
  const reviewData = {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    content: "This is a great product! I really liked it.",
    avatar: {
      src: "/path/to/avatar.png",
      alt: "User Avatar",
    },
  };

  return <ReviewCard data={reviewData} />;
};

export default ReviewCardPage;
```

## Component Details

- The `ReviewCard` component receives a `data` prop, which should be an object containing information about a review.
- The card displays the user's name, avatar, rating, and review content.

## Props

- `data` (Object): An object containing the following properties:
  - `id` (number): The unique identifier for the review.
  - `name` (string): The name of the user who left the review.
  - `rating` (number): The rating given by the user (can be a decimal).
  - `content` (string): The content of the review.
  - `avatar` (Object): An object containing `src` (path to the avatar image) and `alt` (alternate text for the avatar image).

## Note

- Adjust the component styles based on your project's design requirements.
- Customize or extend the component as needed to fit your specific requirements.
- Ensure that you have the necessary styling classes (e.g., `bg-white`, `text-secondary`, etc.) available in your project if used in the component.
