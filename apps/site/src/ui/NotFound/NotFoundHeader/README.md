# NotFoundHeader Component

The `NotFoundHeader` component is a React component designed to display a custom 404 error header with information about the error and options to navigate back.

## Usage

To use the `NotFoundHeader` component, follow these steps:

1. Import the component:

   ```jsx
   import { NotFoundHeader } from "@/ui";
   ```

   Replace `@/ui` with the appropriate path alias or module specifier in your project.

2. Use the component in your JSX:

   ```jsx
   const YourComponent = () => {
     // Provide appropriate data
     const textData = {
       headerText: "Page Not Found",
       descriptionText: "The page you are looking for might be unavailable or does not exist.",
       beckHome: "Back to Home",
       previousPage: "Go to Previous Page",
       directionType: "ltr",
     };

     return <NotFoundHeader textData={textData} />;
   };
   ```

3. Customize the component by providing the required `textData` prop.

## Component Props

The `NotFoundHeader` component accepts the following prop:

- `textData` (object): An object containing the following properties:
  - `headerText` (string): The main header text for the 404 error.
  - `descriptionText` (string): Additional text providing information about the error.
  - `beckHome` (string): Text for the link/button to navigate back to the home page.
  - `previousPage` (string): Text for the link/button to navigate to the previous page.
  - `directionType` (string): This value can be `ltr`, `rtl`

## Default Data

The component includes default data (`defaultData`) that provides default values for the `textData` prop. You can customize this default data according to your application's needs.

## Notes

- Adjust the styling and appearance of the component based on your project's design guidelines.

- Integrate the component into your project where you want to display a custom 404 error header.

- Ensure that necessary dependencies and styles are correctly set up in your project.
