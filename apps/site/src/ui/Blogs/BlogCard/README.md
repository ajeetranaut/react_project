# BlogCard Component

The `BlogCard` component is designed to display a blog card with information such as the featured image, title, category, content, and author details. It includes placeholders for loading states to enhance user experience during data fetching.

## Usage

```jsx
import React from "react";
import { BlogCard } from "@/ui"; // Replace with the actual path to the BlogCard component

const BlogPage = () => {
  // Example props
  const authorByText = "Written by";
  const data = {
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
  };

  return <BlogCard data={data} authorByText={authorByText} />;
};

export default BlogPage;
```

## Component Details

- The `BlogCard` component receives two props: `data` (object) and `authorByText` (string).
- It displays a blog card with a featured image, title, category, content, and author details.
- The component uses Next.js's `Link` component for navigation.

## Props

- `data` (object): An object containing properties like `id`, `title`, `slug`, `featuredmedia`, `category`, `content`, `author`, and `authorId`. These represent the blog post details.
- `authorByText` (string): The text to be displayed before the author's name (e.g., "Written by").

## Styling

- The component applies styles such as `font-medium`, `text-xl`, `text-neutral/90`, etc.
- Ensure that your project has the necessary styles or customize the component's styling based on your project's design requirements.

## Note

- Customize the component as needed based on your project's design and functionality requirements.
- This component assumes the existence of styles such as `text-neutral/90`, `text-base-300/80`, `text-base-300/80`, `text-primary`, etc. Make sure these styles are defined in your project.
