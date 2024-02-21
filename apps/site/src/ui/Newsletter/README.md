# Newsletter Component

The `Newsletter` component is a React component designed to create a newsletter subscription section on your website. It includes a form for users to enter their email addresses, a subscribe button, and an optional image. This component is ideal for encouraging users to subscribe to your newsletter.

## Usage

```jsx
import React from "react";
import { Newsletter } from "@/ui"; // Replace with the actual path to the Newsletter component

const MyPage = () => {
  return <Newsletter />;
};

export default MyPage;
```

## Props

The `Newsletter` component accepts the following props:

- `buttonText` (string): The text for the subscribe button. Defaults to "Subscribe".
- `placeholder` (string): The placeholder text for the email input field. Defaults to "Your Email".
- `src` (string): The source URL for the image. Defaults to "/image/newslatter.png".
- `imageWidth` (number): The width of the image. Defaults to 467.
- `imageHeight` (number): The height of the image. Defaults to 356.
- `formSubmit` (function): A function to handle form submission. It receives the entered email data.
- `formLoading` (boolean): A boolean to indicate if the form is in a loading state. Defaults to `false`.

## Default Props

The `Newsletter` component has default data provided through the `defaultData` file. You can use this default data for testing the component or replace it with your own data.

## Form Handling

The component includes form handling logic with a loading state. You can provide a custom `formSubmit` function to handle the form data.

## Note

Customize the component styles, form logic, and structure based on your project requirements. Ensure to provide appropriate alt text for the image.
