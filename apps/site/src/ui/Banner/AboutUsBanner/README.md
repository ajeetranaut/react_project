# AboutUsBanner Component

The `AboutUsBanner` component is a React component designed to display a banner section with title, subtitle, description, and images for both desktop and mobile views. It's particularly suitable for
showcasing information about a company or brand on a webpage.

## Usage

```jsx
import React from "react";
import { AboutUsBanner } from "@/ui"; // Replace with the actual path to the AboutUsBanner component

const MyPage = () => {
  const bannerData = {
    title: "Your Title",
    sub_title: "Your Subtitle",
    description: "Your description goes here.",
    lgImage: {
      src: "/path/to/large-image.png",
      alt: "Alt text for large image",
      imageWidth: 1350,
      imageHeight: 500,
    },
    smImage: {
      src: "/path/to/small-image.png",
      alt: "Alt text for small image",
      imageWidth: 500,
      imageHeight: 380,
    },
  };

  return <AboutUsBanner {...bannerData} />;
};

export default MyPage;
```

## Props

The `AboutUsBanner` component accepts the following props:

- `title` (string): The main title of the banner.
- `sub_title` (string): The subtitle or secondary title.
- `description` (string): A brief description or content for the banner.
- `lgImage` (object): An object containing details for the large image (desktop view):
    - `src` (string): The path to the large image.
    - `alt` (string): Alternative text for the large image.
    - `imageWidth` (number): The width of the large image.
    - `imageHeight` (number): The height of the large image.
- `smImage` (object): An object containing details for the small image (mobile view):
    - `src` (string): The path to the small image.
    - `alt` (string): Alternative text for the small image.
    - `imageWidth` (number): The width of the small image.
    - `imageHeight` (number): The height of the small image.

## Default Props

The `AboutUsBanner` component has default props in case no props are provided. You can customize the default values as needed.

Feel free to adjust and modify the component according to your project requirements.