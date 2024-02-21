# Footer Component

The `Footer` component is a versatile React component designed to be used as a website footer. It includes sections for displaying a logo, contact information, quick links, account links, support links, a newsletter subscription form, and payment icons. This component is suitable for providing users with essential information and navigation options at the bottom of a webpage.

## Usage

```jsx
import React from "react";
import { Footer } from "@/ui"; // Replace with the actual path to the Footer component

const MyPage = () => {
  const footerData = {
    // ... your footer data here
  };

  return <Footer {...footerData} />;
};

export default MyPage;
```

## Props

The `Footer` component accepts the following props:

- `logoImage` (string): The path to the logo image.
- `emailSubscribeData` (object): Configuration for the newsletter subscription form.
- `paymentIconData` (array of objects): Payment icons to be displayed in the footer.
- `socialData` (array of objects): Social media icons and links.
- `quickLinkData` (object): Quick links section with title and data.
- `accountData` (object): Account links section with title and data.
- `supportData` (object): Support links section with title and data.

## Default Props

The `Footer` component has default data provided through the `data` file. You can use this default data for testing the component or replace it with your own footer data.

## Sections

### Logo Section

Displays the logo as a clickable link to the homepage.

### Contact Information Section

Displays the company's address, phone number, and email address.

### Social Media Section

Displays social media icons with links.

### Quick Links Section

Displays quick links to various sections of the website.

### Account Links Section

Displays links related to user accounts.

### Support Links Section

Displays links to customer support or help center.

### Newsletter Subscription Section

Includes a form for users to subscribe to the newsletter.

### Payment Icons Section

Displays payment icons for accepted payment methods.

## Note

Ensure that you provide actual data to the `Footer` component when using it in your project. Customize the component styles, link destinations, and structure based on your project requirements.
