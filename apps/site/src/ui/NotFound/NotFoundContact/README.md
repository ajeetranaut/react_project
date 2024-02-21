# NotFoundContact Component

The `NotFoundContact` component is a React component designed to display a section for contacting support or a specified contact page when a user encounters a not-found scenario.

## Usage

To use the `NotFoundContact` component, follow these steps:

1. Import the component:

   ```jsx
   import { NotFoundContact } from "@/ui";
   ```

   Replace `@/ui` with the appropriate path alias or module specifier in your project.

2. Use the component in your JSX:

   ```jsx
   const YourComponent = () => {
     // Provide appropriate data
     const textData = {
       headerText: "Need Further Assistance?",
       buttonText: "Contact Us",
     };
     const contactUrl = "/contact"; // Replace with the actual URL of your contact page

     return <NotFoundContact textData={textData} contactUrl={contactUrl} />;
   };
   ```

3. Customize the component by providing the required `textData` and `contactUrl` props.

## Component Props

The `NotFoundContact` component accepts the following props:

- `textData` (object): An object containing the following properties:

  - `headerText` (string): The header text indicating that the user can contact support.
  - `buttonText` (string): The text on the button/link to redirect the user to the contact page.

- `contactUrl` (string): The URL of the contact page or the support contact link.

## Default Data

The component includes default data (`defaultData`) that provides default values for the `textData` prop. You can customize this default data according to your application's needs.

## Notes

- Adjust the styling and appearance of the component based on your project's design guidelines.

- Integrate the component into your project where you want to provide users with an option to contact support or navigate to a contact page in the event of a not-found scenario.

- Ensure that necessary dependencies and styles are correctly set up in your project.
