# ImageGallery Component

The `ImageGallery` component is designed to showcase a gallery of images with an interactive selection feature. It allows users to view a larger version of the selected image within the gallery.

## Usage

```jsx
import React from "react";
import { ImageGallery } from "@/ui"; // Replace with the actual path to the ImageGallery component

const MyComponent = () => {
  // Example data
  const images = [
    { src: "image1.jpg", alt: "Image 1" },
    { src: "image2.jpg", alt: "Image 2" },
    { src: "image3.jpg", alt: "Image 3" },
    // Add more images as needed
  ];

  const discount = 20; // Example discount percentage

  return <ImageGallery images={images} discount={discount} />;
};

export default MyComponent;
```

## Component Details

- The `ImageGallery` component displays a horizontal row of thumbnail images along with a larger selected image.
- Users can click on a thumbnail to change the selected image.
- If `images` is not provided or is an empty array, the component will display a loading skeleton to indicate that the images are being fetched.
- The discount badge, if provided, is displayed on the larger image.

## Props

- `images` (Array): An array of objects, where each object represents an image with properties `src` (source URL), and `alt` (alternative text).
- `discount` (Number): The discount percentage to be displayed as a badge on the larger image.

## Note

- Ensure that you have the `next/image` module configured in your project for image optimization and lazy loading.
- Customize the component styles based on your project's design requirements.
- The component uses Tailwind CSS classes for styling. Make sure to configure Tailwind CSS in your project for the styles to take effect.
- Feel free to modify or extend the component based on your specific requirements.
