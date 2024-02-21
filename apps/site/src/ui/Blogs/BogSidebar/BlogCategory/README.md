# BlogCategory Component

The `BlogCategory` component is designed to display a list of blog categories. Each category is a clickable link that redirects the user to the corresponding blog category page.

## Usage

```jsx
import React from "react";
import { BlogCategory } from "@/ui"; // Replace with the actual path to the BlogCategory component

const BlogPage = () => {
  // Example props
  const data = [
    { name: "Category 1", count: 10, slug: "category-1" },
    { name: "Category 2", count: 5, slug: "category-2" },
    // Add more categories as needed
  ];
  const title = "Blog Categories";

  return <BlogCategory data={data} title={title} />;
};

export default BlogPage;
```

## Component Details

- The `BlogCategory` component receives two props: `data` (array of objects) and `title` (string).
- It displays a list of blog categories within a rounded-rectangle bordered container.
- Each category is represented by a clickable link (`<Link>`) that redirects the user to the corresponding blog category page.
- The component uses Next.js's `Link` component for navigation.

## Props

- `data` (array of objects): An array containing objects with properties `name`, `count`, and `slug`. This represents the blog categories.
- `title` (string): The title of the blog category section.

## Styling

- The component applies styles such as `border`, `rounded-2xl`, `p-7`, `font-medium`, `text-xl`, and various utility classes for styling elements.
- Ensure that your project has the necessary styles or customize the component's styling based on your project's design requirements.

## Note

- Customize the component as needed based on your project's design and functionality requirements.
- This component assumes the existence of styles such as `text-neutral/90`, `text-base-300/80`, `text-primary`, etc. Make sure these styles are defined in your project.
