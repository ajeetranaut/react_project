# DashboardSideBar Component

The `DashboardSideBar` component is a React component designed to render a responsive dashboard sidebar. It includes user information, navigation links, and a logout option.

## Usage

To use the `DashboardSideBar` component, follow these steps:

1. Import the component:

   ```jsx
   import { DashboardSideBar } from "@/ui";
   ```

   Replace `@/path-to-component` with the actual path to the `DashboardSideBar` component.

2. Use the component in your JSX:

   ```jsx
   const YourComponent = () => {
     // Provide appropriate data
     const sidebarMenu = [
       {
         title: "Dashboard",
         icon: <svg></svg>,
         link: "/dashboard",
       },
       // ...your sidebar menu data
     ];

     const userData = {
       username: "John",
       avatar_url: "https://via.placeholder.com/60x60",
     };

     const textData = {
       editText: "Edit",
     };

     return <DashboardSideBar sidebarMenu={sidebarMenu} userData={userData} textData={textData} />;
   };
   ```

3. Customize the component by providing the required props and data.

## Component Props

The `DashboardSideBar` component accepts the following props:

- `sidebarMenu` (array): An array of objects representing the sidebar menu items. Each object should have the following properties:

  - `title` (string): The title of the menu item.

  - `icon` (JSX.Element): The icon for the menu item.

  - `link` (string): The link to navigate to when the menu item is clicked.

- `userData` (object): User information object with the following properties:

  - `username` (string): User's username.

  - `avatar_url` (any): User's avatar URL.

- `textData` (object): An object containing text data for various elements:

  - `editText` (string): Text for the "Edit" link.

## Handling Logout

The component uses the `useCocartLogout` hook to handle the logout functionality. The `handleLogout` function is responsible for performing the logout action. Make sure the `useCocartLogout` hook is correctly set up in your project.

## Default Data

The component includes default data (`defaultData`) that can be used for testing or as a starting point. Ensure to customize the default data according to your application's needs.

## Notes

- Adjust the paths to images and icons based on your project structure.

- Integrate the component into your project and customize styles as needed.

- Ensure that necessary dependencies, such as Next.js, are correctly installed in your project.

- You may need to customize the `handleLogout` function based on your authentication system.
