# BillingShipping Component

The `BillingShipping` component is a React component designed to handle billing and shipping information. It provides an interactive interface for users to view, edit, and submit their billing and shipping details. This component is suitable for use in e-commerce websites or any application where users need to manage their address information.

## Usage

To use the `BillingShipping` component, follow these steps:

1. Use the component in your JSX:

   ```jsx
   import { BillingShipping } from "@/ui";

   const YourComponent = () => {
     // Provide appropriate data and event handlers
     const billingData = {
       // ...your billing data
     };

     const shippingData = {
       // ...your shipping data
     };

     const handleBillingChange = (e) => {
       // ...handle billing form field changes
     };

     const handleBillingClick = () => {
       // ...handle billing form submission
     };

     const handleShippingChange = (e) => {
       // ...handle shipping form field changes
     };

     const handleShippingClick = () => {
       // ...handle shipping form submission
     };

     const textData = {
       // ...your text data
     };

     return (
       <BillingShipping
         billingClickloading={/* boolean indicating billing loading state */}
         handleBillingOnchange={handleBillingChange}
         handleBillingClick={handleBillingClick}
         billing={billingData}
         shippingClickloading={/* boolean indicating shipping loading state */}
         handleShippingOnchange={handleShippingChange}
         handleShippingClick={handleShippingClick}
         shipping={shippingData}
         textData={textData}
       />
     );
   };
   ```

2. Customize the component by providing the required props and handling events.

## Component Props

The `BillingShipping` component accepts the following props:

### Billing Props

- `billingClickloading` (boolean): Loading state for the billing form submission button.

- `handleBillingOnchange` (function): Event handler for billing form field changes. Accepts an event object.

- `handleBillingClick` (function): Event handler for billing form submission. Accepts no arguments.

- `billing` (object): Billing information object with the following properties:

  - `address_1` (string): Address line 1.

  - `address_2` (string): Address line 2.

  - `city` (string): City.

  - `company` (string): Company name.

  - `country` (string): Country.

  - `email` (string): Email address.

  - `first_name` (string): First name.

  - `last_name` (string): Last name.

  - `phone` (string): Phone number.

  - `postcode` (string): Postal code.

  - `state` (string): State.

### Shipping Props

- `shippingClickloading` (boolean): Loading state for the shipping form submission button.

- `handleShippingOnchange` (function): Event handler for shipping form field changes. Accepts an event object.

- `handleShippingClick` (function): Event handler for shipping form submission. Accepts no arguments.

- `shipping` (object): Shipping information object with the same properties as the billing object.

### Text Data

- `textData` (object): An optional object containing text data for various form elements:

  - `billingText` (string): Text for the billing information section.

  - `shippingText` (string): Text for the shipping information section.

  - `editText` (string): Text for the "Edit" link.

  - `fromText` (object): Text data for form placeholders and button text:

    - `firstNamePlaceholder` (string): Placeholder text for the first name input.

    - `lastNamePlaceholder` (string): Placeholder text for the last name input.

    - `companyPlaceholder` (string): Placeholder text for the company input.

    - `emailPlaceholder` (string): Placeholder text for the email input.

    - `phonePlaceholder` (string): Placeholder text for the phone input.

    - `countryPlaceholder` (string): Placeholder text for the country input.

    - `address1Placeholder` (string): Placeholder text for the address line 1 input.

    - `address2Placeholder` (string): Placeholder text for the address line 2 input.

    - `statePlaceholder` (string): Placeholder text for the state input.

    - `cityPlaceholder` (string): Placeholder text for the city input.

    - `postCodePlaceholder` (string): Placeholder text for the postal code input.

    - `buttonText` (string): Text for the submit button.

## Default Data

The component includes default data (`defaultData`) that can be used for testing or as a starting point. Ensure to customize the default data according to your application's needs.

## Notes

- Adjust the paths to images and icons based on your project structure.

- Integrate the component into your project and customize styles as needed.

- Ensure that necessary dependencies, such as React Icons, are correctly installed in your project.
