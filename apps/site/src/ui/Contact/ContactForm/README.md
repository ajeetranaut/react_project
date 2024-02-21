# ContactForm Component

The `ContactForm` component is a React component designed for displaying a contact form along with an optional map image. This component is versatile and can be easily integrated into websites or applications that require a contact functionality.

## Usage

To use the `ContactForm` component, follow these steps:

1. Use the component in your JSX:

   ```jsx
   import { ContactForm } from "@/ui";

   const YourComponent = () => {
     // Provide appropriate data and event handlers
     const formData = {
       // ...your form data
     };

     const handleFormChange = (e) => {
       // ...handle form field changes
     };

     const handleFormClick = (e) => {
       // ...handle form submission
     };

     return (
       <ContactForm
         src="path/to/your/map-image.jpg"
         formhandleChange={handleFormChange}
         formhandleClick={handleFormClick}
         formText={{
           headerText: "Contact Us",
           namePlaceholder: "Your Name",
           emailPlaceholder: "Your Email",
           subjectPlaceholder: "Subject",
           messagePlaceholder: "Your Message",
           buttonText: "Submit",
         }}
       />
     );
   };
   ```

2. Customize the component by providing the required props and handling events.

## Component Props

The `ContactForm` component accepts the following props:

- `src` (string): Path to the map image to be displayed alongside the form.

- `formhandleChange` (function): Event handler for form field changes. Accepts an event object.

- `formhandleClick` (function): Event handler for form submission. Accepts an event object.

- `formText` (object): An optional object containing text data for various form elements:

  - `headerText` (string): Header text for the contact form.

  - `namePlaceholder` (string): Placeholder text for the name input field.

  - `emailPlaceholder` (string): Placeholder text for the email input field.

  - `subjectPlaceholder` (string): Placeholder text for the subject input field.

  - `messagePlaceholder` (string): Placeholder text for the message textarea.

  - `buttonText` (string): Text for the submit button.

## Default Data

The component includes default data (`defaultData`) that can be used for testing or as a starting point. Ensure to customize the default data according to your application's needs.

## Note

- Adjust the paths to images and icons based on your project structure.

- Integrate the component into your project and customize styles as needed.

- Ensure that necessary dependencies, such as Next.js and other styling libraries, are correctly installed in your project.
