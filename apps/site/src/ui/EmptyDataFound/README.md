# EmptyDataFound Component

The `EmptyDataFound` component is a simple React component designed to display a message when no data is available. This component can be used to inform users when a list or section is empty.

## Usage

To use the `EmptyDataFound` component, follow these steps:

1. Import the component:

   ```jsx
   import { EmptyDataFound } from "@/ui";
   ```

   Replace `@/ui` with the appropriate path alias or module specifier in your project.

2. Use the component in your JSX:

   ```jsx
   const YourComponent = () => {
     // Provide appropriate data
     const message = "No data found.";

     return <EmptyDataFound message={message} />;
   };
   ```

3. Customize the component by providing the required props and data.

## Component Props

The `EmptyDataFound` component accepts the following prop:

- `message` (string): The message to display when no data is available.

## Default Data

The component includes default data (`defaultData`) that provides a default message ("No Available Data Found"). You can customize this default data according to your application's needs.

## Notes

- Adjust the styling and appearance of the component based on your project's design guidelines.

- Integrate the component into your project where you want to inform users about empty data scenarios.

- Ensure that necessary dependencies and styles are correctly set up in your project.
