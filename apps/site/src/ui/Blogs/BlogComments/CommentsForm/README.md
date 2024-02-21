# CommentsForm Component

The `CommentsForm` component is designed to allow users to submit comments on a blog post. It includes a form with input fields for name, email, and message, as well as logic to handle form
submission using the `react-hook-form` library and making requests to an API endpoint using `fetch`. The component also provides visual feedback messages for successful submission or error.

## Usage

```jsx
import React from "react";
import { CommentsForm } from "@/ui"; // Replace with the actual path to the CommentsForm component

const BlogPostPage = () => {
  // Example props
  const postId = 123;
  const fromText = {
    responseText = "Thanks for your comment! It will be reviewed soon.";
    headerText: "Leave a Comment",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    replyButtonText: "Submit Comment",
  };

  return <CommentsForm postId={postId} fromText={fromText}  />;
};

export default BlogPostPage;
```

## Component Details

- The `CommentsForm` component receives props such as `postId` (ID of the associated blog post), `fromText` (text for form elements).

- It uses the `react-hook-form` library to manage the form state and validation.

- The component displays visual feedback messages for successful submission or errors.

- The form includes input fields for name, email, and message, and a submit button.

## Props

- `postId` (number): The ID of the blog post to which the comment will be submitted.

- `fromText` (object): An object containing text for form elements, including `responseText`, `headerText`, `namePlaceholder`, `emailPlaceholder`, `messagePlaceholder`, and `replyButtonText`.

## Note

- Customize the component based on your project's design and functionality requirements.

- Ensure that the necessary dependencies, such as `react-hook-form` and `fetch`, are correctly installed and imported in your project.

- Adjust the API endpoint (`/api/comments/create-comment`) based on your backend implementation.

- Make sure that the form elements' placeholder texts and other content are suitable for your application.
