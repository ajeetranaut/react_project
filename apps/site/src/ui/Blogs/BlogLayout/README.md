# BlogLayout Component

The `BlogLayout` component serves as a layout for displaying a collection of blog cards along with various sidebars such as search, categories, recent posts, and tags. It is designed to be responsive, with additional options available for smaller screens.

## Usage

```jsx
import React from "react";
import { BlogLayout } from "@/ui"; // Replace with the actual path to the BlogLayout component

const BlogPage = () => {
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

  const categoryData = [
    { name: "Technology", count: 10, slug: "technology" },
    // Add more category data as needed
  ];

  const tagData = [
    { name: "React", slug: "react" },
    // Add more tag data as needed
  ];

  const handleClick = () => {
    // Handle load more action
  };

  return (
    <BlogLayout
      data={data}
      categoryData={categoryData}
      tagData={tagData}
      handleClick={handleClick}
      pageData={6}
      sidebarTitles= {
        searchSidebarTitle: "Search",
        categorySidebarTitle: "Browse By Categories",
        recentPostsSidebarTitle: "Recent Posts",
        tagsSidebarTitle: "Tags",
        sidebarMobileButton: "More Option",
    }
     authorByText="By"
     directionType= "ltr"
    />
  );
};

export default BlogPage;
```

## Component Details

- The `BlogLayout` component receives various props, including `data` (blog posts), `categoryData` (category information), `tagData` (tag information), `handleClick` (function for handling load more), `pageData` (number of items per page), and sidebar titles.

- It displays a grid of blog cards, along with sidebars for search, categories, recent posts, and tags.

- The layout includes a "More Option" button that reveals additional options on smaller screens.

## Props

- `data` (array): An array of blog post objects, each containing properties like `id`, `title`, `slug`, `featuredmedia`, `category`, `content`, `author`, and `authorId`.

- `categoryData` (array): An array of category objects, each containing properties like `name`, `count`, and `slug`.

- `tagData` (array): An array of tag objects, each containing properties like `name` and `slug`.

- `handleClick` (function): A function to handle the "Load More" action.

- `pageData` (number): The number of items to display per page.

- `sidebarTitles`: object of `searchSidebarTitle`, `categorySidebarTitle`, `recentPostsSidebarTitle`, `tagsSidebarTitle` (strings): Titles for respective sidebars.

- `directionType` (string): This value can be `ltr`, `rtl`

- `authorByText` (string): String value for author indication like `By`

## Styling

- The component assumes the existence of styles such as `font-medium`, `text-lg`, `text-white`, `bg-secondary`, etc. Make sure these styles are defined in your project.

## Note

- Customize the component based on your project's design and functionality requirements.

- This component relies on Next.js's dynamic routing, so ensure that your project is configured accordingly.
