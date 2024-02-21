# CommentItem Component

The `CommentItem` component is designed to display an individual comment within a comments section of a blog post. It provides functionality to reply to the comment through a modal form.

## Usage

```jsx
import React from "react";
import { CommentItem } from "@/ui"; // Replace with the actual path to the CommentItem component

const BlogPostPage = () => {
  // Example props
  const item = {
    id: 1,
    author: "John Doe",
    publishTime: "2023-01-01T12:00:00Z",
    content: "This is a comment.",
    avatar: {
      src: "/path/to/avatar.jpg",
      alt: "Avatar Alt Text",
    },
  };

  const postID = 123;
  const replyFormText = {
    cancelText: "Cancel",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    replyButtonText: "Reply",
  };

  return <CommentItem item={item} postID={postID} replyFormText={replyFormText} />;
};

export default BlogPostPage;
```

## Component Details

- The `CommentItem` component receives props such as `item` (comment data), `postID` (ID of the associated blog post), and `replyFormText` (text for reply form elements).

- It includes a modal form that allows users to reply to the comment. The modal form includes input fields for name, email, and message.

- The `CommentItem` component displays the comment author's avatar, name, publication time, and the comment content.

## Props

- `item` (object): An object representing a comment with properties such as `id`, `author`, `publishTime`, `content`, and `avatar` (with properties `src` and `alt`).

- `postID` (number): The ID of the blog post to which the comment belongs.

- `replyFormText` (object): An object containing text for reply form elements, including `cancelText`, `namePlaceholder`, `emailPlaceholder`, `messagePlaceholder`, and `replyButtonText`.

## Note

- Customize the component based on your project's design and functionality requirements.

- Ensure that the necessary dependencies, such as `next/image`, `fetch`, `moment`, and `react-hook-form`, are correctly installed and imported in your project.

- Make sure that the avatar image path is correctly provided in the `item.avatar.src` property.
