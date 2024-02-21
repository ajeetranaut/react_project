# CategoryCards Component

The `CategoryCards` component displays a grid of blog cards for a specific category. It provides a visually appealing layout with the option to load more blog cards.

## Usage

```jsx
import React from "react";
import { CategoryCards } from "@/ui"; // Replace with the actual path to the CategoryCards component

const CategoryPage = () => {
  // Example props
  const data = [
    {
      id: 1,
      title: "Example Blog Post",
      slug: "example-blog-post",
      featuredmedia: {
        sourceUrl: "/path/to/image.jpg",
        alt: "Image Alt Text",
      },
      category: [{ name: "Technology" }],
      content: "<p>Blog content goes here</p>",
      author: "John Doe",
      authorId: 123,
    },
    // Add more blog data as needed
  ];

  const authorByText = "By";
  const pageData = 6;
  const loadButtonText = "Load More";

  const handleClick = () => {
    // Handle load more action
  };

  return (
    <CategoryCards
      data={data}
      authorByText={authorByText}
      pageData={pageData}
      handleClick={handleClick}
      loadButtonText={loadButtonText}
    />
  );
};

export default CategoryPage;
```

## Component Details

- The `CategoryCards` component receives various props, including `data` (blog posts), `authorByText` (text to display for the author), `pageData` (number of items per page), `handleClick` (function for handling load more), and `loadButtonText` (text for the "Load More" button).

- It displays a grid of blog cards, each representing a blog post within a specific category.

- The layout includes a "Load More" button that allows users to load additional blog cards.

## Props

- `data` (array): An array of blog post objects, each containing properties like `id`, `title`, `slug`, `featuredmedia`, `category`, `content`, `author`, and `authorId`.

- `authorByText` (string): Text to display for the author, e.g., "By".

- `pageData` (number): The number of items to display per page.

- `handleClick` (function): A function to handle the "Load More" action.

- `loadButtonText` (string): Text for the "Load More" button.

## Styling

- The component assumes the existence of styles such as `font-medium`, `text-base`, `leading-6`, `bg-secondary-content`, `text-base-300`, etc. Make sure these styles are defined in your project.

## Note

- Customize the component based on your project's design and functionality requirements.
