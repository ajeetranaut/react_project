# Slide Component

The `Slide` component is a React component designed to display a slide with title, excerpt, image, and an optional promotional offer. It is particularly useful for creating sliders or carousels in web
applications.

## Usage

```jsx
import React from "react";
import Link from "next/link";
import Slide from "./Slide"; // Replace with the actual path to the Slide component

const MyComponent = () => {
  const slideData = {
    title: "Your Title",
    excerpt: "Brief description or content of the slide.",
    button: {
      title: "Button Text",
      link: "/button-link",
      target: "_blank",
    },
    image: {
      src: "/path/to/image.jpg",
      width: 1200,
      height: 800,
    },
    offer: "Flat 40% Off", // Optional: Set to null or omit for no offer
    offerType: "SALE", // Optional: "NEW" | "SALE" | "HOT", default is "NEW"
  };

  return <Slide {...slideData} />;
};

export default MyComponent;
```

## Props

The `Slide` component accepts the following props:

- `title` (string): The main title of the slide.
- `excerpt` (string): A brief description or content of the slide.
- `button` (object): An object containing button details:
    - `title` (string): The text to display on the button.
    - `link` (string): The URL the button should navigate to.
    - `target` (string): The target attribute for the link (e.g., "_blank" for a new tab).
- `image` (object): An object containing image details:
    - `src` (string): The path to the image.
    - `width` (number): The width of the image.
    - `height` (number): The height of the image.
- `offer` (string, optional): The percentage value of a promotional offer. Omit or set to null for no offer.
- `offerType` (string, optional): The type of offer, one of "NEW," "SALE," or "HOT." Defaults to "NEW."

## Styling

You can customize the styles of the component by modifying the classNames in the component's JSX.

Feel free to adapt and modify the component to suit your specific project requirements.