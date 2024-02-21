# BlogContent Component

The `BlogContent` component is responsible for displaying the content of a blog post, including its title, category tags, author information, publish time, featured image, and the parsed HTML content. It provides a visually appealing and responsive layout.

## Usage

```jsx
import React from "react";
import { BlogContent } from "@/ui"; // Replace with the actual path to the BlogContent component

const BlogPostPage = () => {
  // Example props
  const data = {
    title: "Example Blog Post",
    featuredmedia: {
      sourceUrl: "/path/to/image.jpg",
      alt: "Image Alt Text",
    },
    category: [{ name: "Technology" }],
    content: "<p>Blog content goes here</p>",
    author: "John Doe",
    authorId: 123,
    publishTime: "2023-01-01T12:00:00Z", // ISO 8601 format
  };

  const authorByText = "By";

  return <BlogContent data={data} authorByText={authorByText} />;
};

export default BlogPostPage;
```

## Component Details

- The `BlogContent` component receives props such as `data` (blog post details) and `authorByText` (text to display for the author).

- It displays the blog post's title, category tags, author information, publish time, featured image, and parsed HTML content.

- The content is parsed using the `html-react-parser` library, and images within the content are replaced with `next/image` for better optimization.

- Styled components are used to apply custom styling for different HTML elements like headings, paragraphs, and spans.

## Props

- `data` (object): An object containing details of the blog post, including `title`, `featuredmedia`, `category`, `content`, `author`, `authorId`, and `publishTime`.

- `authorByText` (string): Text to display for the author, e.g., "By".

## Styling

- The component uses custom styling for different HTML elements. Ensure that the styles defined in the `Element` styled component are consistent with your project's design.

## Note

- Customize the component based on your project's design and functionality requirements.
