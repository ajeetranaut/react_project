## OrderHistory Component

> The OrderHistory component is designed to display a tabbed view of order history, providing both desktop and mobile versions. It allows users to switch between different order status tabs and view order details.

### Props

> The following props can be passed to the OrderHistory component:

| Prop        | Type                                                                                                                                                 | Required | Description                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------- |
| `active`    | `string`                                                                                                                                             | Yes      | The slug of the active tab.                                                      |
| `isLoading` | `boolean`                                                                                                                                            | Yes      | Loader action.                                                                   |
| `setActive` | `React.Dispatch<React.SetStateAction<string>>`                                                                                                       | Yes      | A function to set the active tab.                                                |
| `tabsData`  | `{ name: string; slug: string; }[]`                                                                                                                  | Yes      | An array of tab data, each object representing a tab with specific details.      |
| `data`      | `{ id: number; date: string; itemLength: number; total: number; status: string; }[]`                                                                 | Yes      | An array of order data, each object representing an order with specific details. |
| `textData`  | `{ noOrderText: string; tableHeaders: { orderId: string; date: string; item: string; total: string; status: string; action: string; view: string;}}` | Yes      | An object of text data collection of string type.                                |

### Usage

```jsx
import React from "react";
import { OrderHistory } from "@/ui";

const orderHistoryData = {
  tabsData: [
    { name: "Pending", slug: "pending" },
    { name: "Completed", slug: "completed" },
    // ... add more tabs as needed
  ],
  data: [
    { id: 1, date: "2023-01-01", itemLength: 3, total: 150.0, status: "pending" },
    { id: 2, date: "2023-01-02", itemLength: 2, total: 100.0, status: "completed" },
    // ... add more order data as needed
  ],
  textData: {
    noOrderText: "There are no orders yet.",
    tableHeaders: {
      orderId: "Order ID",
      date: "Date",
      item: "Item",
      total: "Total",
      status: "Status",
      action: "Action",
      view: "View",
    },
  },
};

const MyOrderHistoryComponent = () => {
  const [active, setActive] = useState("completed");

  return <OrderHistory active={active} setActive={setActive} {...orderHistoryData} />;
};

export default MyOrderHistoryComponent;
```

### Structure

The OrderHistory component consists of two main sections: the tabbed section and the order details section.

#### Tabbed Section

The tabbed section displays different tabs based on the `tabsData` prop. Users can click on each tab to switch between different order status views.

#### Order Details Section (Desktop View)

The desktop view displays a table with order details, including Order ID, Date, Item, Total, Status, and an Action button for further interaction.

#### Order Details Section (Mobile View)

The mobile view provides a simplified display of order details, stacked vertically for better readability on smaller screens.

### Styling

The component uses Tailwind CSS classes for styling. You can customize the appearance by modifying these classes as needed.

### Default Data

The component includes default data for testing purposes. You can replace it with your own data when integrating the component into your application.
