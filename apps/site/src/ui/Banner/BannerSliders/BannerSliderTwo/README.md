# Banner Slider Two Component

The `Slide` component is a React component designed to display a slide with title, excerpt, image, and an optional promotional offer. It is particularly useful for creating sliders or carousels in web
applications.

## Usage

```jsx
import BannerSliderTwo from "@/ui"; // Replace with the actual path to the Slide component

const MyComponent = () => {
  const sliderData = [
    {
      excerpt: "NEW FAVOURABLE SMART DEVICE",
      title: {
        normalText: "PERFECT",
        boldText: "COLLECTION",
      },
      price: {
        fromText: "FROM",
        amount: "$349",
        fraction: ".99",
      },
      images: {
        imageOne: {
          src: "/image/banner-two/banner-product1.png",
          alt: "product-one",
        },
        imageTwo: {
          src: "/image/banner-two/banner-product2.png",
          alt: "product-two",
        },
      },
      button: {
        title: "SHOP NOW",
        link: "/shop",
        target: "_self",
      },
    },
    // .... others data ;
  ];

  return <BannerSliderTwo data={sliderData} />;
};

export default MyComponent;
```

## Props

The `BannerSliderTwo` component accepts the following object data of array:

- `excerpt` (string): A brief description or content of the slide.
- `title` (object): The main title of the slide with `normalText`, `boldText`.
- `price` (object): The main title of the slide with `fromText`, `amount`, `fraction`.
- `button` (object): An object containing button details:
  - `title` (string): The text to display on the button.
  - `link` (string): The URL the button should navigate to.
  - `target` (string): The target attribute for the link (e.g., "\_blank" for a new tab).
- `images` (object): An object containing image details:
  - `imageOne` (object): An object containing image details:
    - `src` (string): The path to the image.
    - `width` (number): The width of the image.
  - `imageTwo` (object): An object containing image details:
    - `src` (string): The path to the image.
    - `width` (number): The width of the image.

## Styling

You can customize the styles of the component by modifying the classNames in the component's JSX.

Feel free to adapt and modify the component to suit your specific project requirements.
