# RecentPosts Component

The `RecentPosts` component is designed to display a list of recent blog posts with their titles, featured images, and author information. It includes placeholders for loading states to enhance user experience during data fetching.

## Usage

```jsx
import React from "react";
import { RecentPosts } from "@/ui"; // Replace with the actual path to the RecentPosts component

const BlogPage = () => {
  // Example props
  const title = "Recent Posts";
  const authorByText = "Author";
  const data = [
    {
      title: "Sample Blog Post 1",
      author: "John Doe",
      authorId: 1,
      featuredmedia: {
        sourceUrl: "/images/sample-image-1.jpg",
        alt: "Sample Image 1",
      },
      slug: "sample-blog-post-1",
    },
    // Add more blog posts as needed
  ];

  return <RecentPosts title={title} authorByText={authorByText} data={data} />;
};

export default BlogPage;
```

## Component Details

- The `RecentPosts` component receives three props: `title` (string), `authorByText` (string), and `data` (array of objects).
- It displays a section with the specified title and a list of recent blog posts.
- Each blog post is represented by a card with a featured image, title, and author information.
- The component uses Next.js's `Link` component for navigation.

## Props

- `title` (string): The title of the recent posts section.
- `authorByText` (string): The text used to indicate the author. Example: "Author".
- `data` (array of objects): An array containing objects with properties `title`, `author`, `authorId`, `featuredmedia`, and `slug`. This represents the recent blog posts.

## Styling

- The component applies styles such as `font-semibold`, `text-xl`, `text-neutral/90`, etc.
- Ensure that your project has the necessary styles or customize the component's styling based on your project's design requirements.

## Note

- Customize the component as needed based on your project's design and functionality requirements.
- This component assumes the existence of styles such as `text-neutral/90`, `text-base-300/80`, `text-primary`, etc. Make sure these styles are defined in your project.
