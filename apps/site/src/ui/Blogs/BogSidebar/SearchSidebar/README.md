# SearchSidebar Component

The `SearchSidebar` component is designed to provide a search input field within a sidebar. Users can input search queries and submit the form to navigate to the search results page.

## Usage

```jsx
import React from "react";
import { SearchSidebar } from "@/ui"; // Replace with the actual path to the SearchSidebar component

const SearchPage = () => {
  // Example props
  const title = "Search";
  const inputPlaceholder = "Search for articles...";

  return <SearchSidebar title={title} inputPlaceholder={inputPlaceholder} directionType="ltr" />;
};

export default SearchPage;
```

## Component Details

- The `SearchSidebar` component receives two props: `title` (string) and `inputPlaceholder` (string).
- It displays a search input field within a rounded-rectangle bordered container.
- Users can input search queries into the text field.
- Clicking the search button or pressing Enter triggers the form submission, directing the user to the search results page.
- The component uses Next.js's `useRouter` to handle navigation.

## Props

- `title` (string): The title of the search sidebar.
- `inputPlaceholder` (string): The placeholder text for the search input field.
- `directionType` (string): This value can be `ltr`, `rtl`

## Styling

- The component applies styles such as `border`, `rounded-2xl`, `p-7`, `font-medium`, `text-xl`, and various utility classes for styling input and button elements.
- Ensure that your project has the necessary styles or customize the component's styling based on your project's design requirements.

## Note

- Customize the component as needed based on your project's design and functionality requirements.
- This component assumes the existence of styles such as `bg-primary`, `text-themeBlackLight`, `bg-info-content`, etc. Make sure these styles are defined in your project.
