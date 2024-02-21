# OurOffer Component

The `OurOffer` component is a React component designed to display a section with a title, a list of offers, and an image. It's suitable for showcasing various offers or services provided by a business
or organization.

## Usage

```jsx
import React from "react";
import { OurOffer } from "@/ui"; // Replace with the actual path to the OurOffer component

const MyPage = () => {
  const offerData = {
    title: "What can we do for you?",
    offers: [
      {
        title: "Free Shipping",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
      {
        title: "100% Money Back",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
      {
        title: "Support 24/7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
    ],
    image: {
      src: "/image/platform1.png",
      alt: "Offer Image",
      width: 640,
      height: 520,
    },
  };

  return <OurOffer {...offerData} />;
};

export default MyPage;
```

## Props

The `OurOffer` component accepts the following props:

- `title` (string): The main title of the offer section.
- `offers` (array of objects): An array containing offer details, each having:
    - `title` (string): The title of the offer.
    - `description` (string): A brief description or content for the offer.
- `image` (object): An object containing details for the image:
    - `src` (string): The path to the image.
    - `alt` (string): Alternative text for the image.
    - `width` (number): The width of the image.
    - `height` (number): The height of the image.

## Default Props

The `OurOffer` component has default data provided through a `data.json` file. You can use this default data for testing the component or replace it with your own data.

Feel free to adapt and modify the component according to your project requirements.