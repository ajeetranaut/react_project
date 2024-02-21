# OurTeam Component

The `OurTeam` component is a React component designed to showcase a team or group of individuals with their avatars, names, and titles. It provides a visually appealing section for introducing team
members on a webpage.

## Usage

```jsx
import React from "react";
import { OurTeam } from "@/ui"; // Replace with the actual path to the OurTeam component

const MyPage = () => {
  const teamData = {
    title: "Meet Our Team",
    description: "Learn more about the talented individuals behind our success.",
    list: [
      {
        avatar: "/path/to/avatar1.png",
        name: "John Doe",
        title: "Founder & CEO",
      },
      {
        avatar: "/path/to/avatar2.png",
        name: "Jane Smith",
        title: "Creative Director",
      },
      // Add more team members as needed
    ],
  };

  return <OurTeam {...teamData} />;
};

export default MyPage;
```

## Props

The `OurTeam` component accepts the following props:

- `title` (string): The main title for the team section.
- `description` (string): A brief description or content introducing the team.
- `list` (array of objects): An array containing objects with `avatar`, `name`, and `title` properties for each team member.

## Default Props

The `OurTeam` component has default data provided through a `data.json` file. You can use this default data for testing the component or replace it with your own team members' information.

Feel free to customize the component and tailor it to your project's needs.