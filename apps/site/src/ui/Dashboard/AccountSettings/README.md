# AccountSettings Component

The `AccountSettings` component is a React component designed to manage and update basic user account information. It provides a user-friendly interface for users to update their first name and last name. This component is suitable for use in account settings sections of user profiles.

## Usage

To use the `AccountSettings` component, follow these steps:

1. Import the component:

   ```jsx
   import { AccountSettings } from "@/path-to-component/AccountSettings";
   ```

   Replace `@/path-to-component` with the actual path to the `AccountSettings` component.

2. Use the component in your JSX:

   ```jsx
   const YourComponent = () => {
     // Provide appropriate data and event handlers
     const userInfoUpdate = {
       // ...your user info data
     };

     const handleUserInfoUpdate = (e) => {
       // ...handle user info form field changes
     };

     const handleUpdateClick = () => {
       // ...handle user info form submission
     };

     const updateClickloading = false; // Set to true during loading state

     const textData = {
       // ...your text data
     };

     return (
       <AccountSettings
         handleUserInfoUpdate={handleUserInfoUpdate}
         handleUpdateClick={handleUpdateClick}
         updateClickloading={updateClickloading}
         userInfoUdate={userInfoUpdate}
         textData={textData}
       />
     );
   };
   ```

3. Customize the component by providing the required props and handling events.

## Component Props

The `AccountSettings` component accepts the following props:

- `handleUserInfoUpdate` (function): Event handler for user info form field changes. Accepts an event object.

- `handleUpdateClick` (function): Event handler for user info form submission. Accepts no arguments.

- `updateClickloading` (boolean): Loading state for the update button.

- `userInfoUpdate` (object): User information object with the following properties:

  - `first_name` (string): User's first name.

  - `last_name` (string): User's last name.

  - `username` (string): User's username.

  - `email` (string): User's email address.

- `textData` (object): An object containing text data for various form elements:

  - `titleText` (string): Title text for the account settings section.

  - `fromText` (object): Text data for form placeholders and button text:

    - `firstNamePlaceholder` (string): Placeholder text for the first name input.

    - `lastNamePlaceholder` (string): Placeholder text for the last name input.

    - `usernamePlaceholder` (string): Placeholder text for the username input.

    - `emailPlaceholder` (string): Placeholder text for the email input.

    - `buttonText` (string): Text for the submit button.

## Default Data

The component includes default data (`defaultData`) that can be used for testing or as a starting point. Ensure to customize the default data according to your application's needs.

## Notes

- Adjust the paths to images and icons based on your project structure.

- Integrate the component into your project and customize styles as needed.

- Ensure that necessary dependencies, such as React Hook Form, are correctly installed in your project.
