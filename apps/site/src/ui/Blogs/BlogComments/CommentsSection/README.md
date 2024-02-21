# CommentsSection Component

The `CommentsSection` component is responsible for displaying the comments section of a blog post. It renders a list of comments using the `CommentItem` component, and provides functionality for replying to comments.

## Usage

```jsx
import React from "react";
import { CommentsSection } from "@/ui"; // Replace with the actual path to the CommentsSection component

const BlogPostPage = () => {
  // Example props
  const getAllComments = [
    {
      id: 1,
      author: "John Doe",
      publishTime: "2023-01-01T12:00:00Z",
      content: "This is a comment.",
      avatar: {
        src: "/path/to/avatar.jpg",
        alt: "Avatar Alt Text",
      },
    },
    // Add more comments as needed
  ];

  const postID = 123;
  const replyFormText = {
    cancelText: "Cancel",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    replyButtonText: "Reply",
  };

  return <CommentsSection getAllComments={getAllComments} postID={postID} replyFormText={replyFormText} />;
};

export default BlogPostPage;
```

## Component Details

- The `CommentsSection` component receives props such as `getAllComments` (an array of comments), `postID` (ID of the blog post), and `replyFormText` (text for reply form elements).

- It renders a count of comments and iterates over the comments array to display each comment using the `CommentItem` component.

## Props

- `getAllComments` (array): An array of comments, where each comment has properties such as `id`, `author`, `publishTime`, `content`, and `avatar` (with properties `src` and `alt`).

- `postID` (number): The ID of the blog post to which the comments belong.

- `replyFormText` (object): An object containing text for reply form elements, including `cancelText`, `namePlaceholder`, `emailPlaceholder`, `messagePlaceholder`, and `replyButtonText`.

## Note

- Customize the component based on your project's design and functionality requirements.

- Ensure that the `CommentItem` component is correctly imported and available at the specified path.
