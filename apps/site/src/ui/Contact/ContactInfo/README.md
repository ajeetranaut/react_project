# ContactInfo Component

The `ContactInfo` component displays contact information, and it includes a loading state using the `react-loading-skeleton` library when the data is not available. The component receives an array of contact information as props and renders each contact block. If the data is not available (e.g., during loading), it displays a skeleton loading animation.

## Usage

```jsx
import React from "react";
import { ContactInfo } from "@/ui"; // Replace with the actual path to the ContactInfo component

const ContactPage = () => {
  // Example props
  const contactData = {
    textType: "en",
    data: {
      en: [
        {
          title: "Contact 1",
          contact1: "123 Main Street",
          contact2: "City, Country",
        },
        // Add more contact objects as needed
      ],
      //..and others language want to use
    },
  };
  return <ContactInfo data={contactData} />;
};

export default ContactPage;
```

## Component Details

- The `ContactInfo` component receives an array of contact information as props (`data`) and maps through each contact item to render the contact blocks.

- For each contact item, it displays a title, contact1, and contact2 information.

- If the data is not available (i.e., `!data`), it displays three skeleton loading blocks using the `react-loading-skeleton` library.

## Props

- `textType` as string, `data` object with language name value with (array of objects): An array of show options with `title`, `contact1`, and `contact2`.

## Note

- Customize the component based on your project's design and requirements.

- Ensure that the necessary dependencies are correctly installed and imported in your project.

- Adjust the paths to icons and images based on your project structure.
