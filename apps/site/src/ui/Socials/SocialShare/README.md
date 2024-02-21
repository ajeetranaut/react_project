# SocialShare Component

The `SocialShare` component facilitates easy social media sharing by providing buttons for popular platforms such as Facebook, Twitter, LinkedIn, and WhatsApp.

## Usage

```jsx
import React from "react";
import { SocialShare } from "@/ui"; // Replace with the actual path to the SocialShare component

const MyPage = () => {
  // Example title for sharing
  const pageTitle = "Check out this amazing content!";

  return <SocialShare title={pageTitle} />;
};

export default MyPage;
```

## Component Details

- The `SocialShare` component displays a title and provides social media sharing buttons for Facebook, Twitter, LinkedIn, and WhatsApp.
- The component uses the `react-share` library to generate share buttons for each platform.
- The `title` prop is used to set the content or title of the page to be shared.

## Props

- `title` (String): The title or content of the page to be shared on social media.

## Note

- Make sure to configure the `process.env.NEXT_PUBLIC_SITE_URL` variable in your project to set the base URL for sharing. This ensures that the full URL for the current page is constructed correctly.
- Customize the component styles based on your project's design requirements.
- Feel free to modify or extend the component based on your specific requirements.
