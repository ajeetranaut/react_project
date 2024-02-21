## OrderDetails Component

> The OrderDetails component is designed to display detailed information about a specific order. It includes billing and shipping addresses, order summary, and a list of line items.

### Props

> The following props can be passed to the OrderDetails component:

| Prop         | Type                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `billing`    | `{ address_1: string; email: string; phone: string; }`                                                                                                                                                                                                                                                                                                                                      | Billing address information.                                      |
| `shipping`   | `{ address_1: string; phone: string; }`                                                                                                                                                                                                                                                                                                                                                     | Shipping address information.                                     |
| `orderInfo`  | `{ id: number; payment_method: string; subtotal: string; discount_total: string; shipping_total: string; total: string; }`                                                                                                                                                                                                                                                                  | Order summary information.                                        |
| `line_items` | `LineItemProps[]`                                                                                                                                                                                                                                                                                                                                                                           | An array of line items, each representing a product in the order. |
| `textData`   | `{ headerText: string; backButtonText: string; address: { billingTitle: string; shippingTitle: string; location: string; email: string; phone: string;},pricing: { orderId: string; method: string; subtotal: string; discount: string; shipping: string; total: string; }, tableHeaders: { product: string; price: string; quantity: string; quantityMobile: string; subtotal: string; } ` | An object tof textData collection.                                |

### Usage

```jsx
import React from "react";
import { OrderDetails } from "@/path/to/OrderDetails";

const orderDetailsData = {
  billing: {
    address_1: "123 Main St, Cityville",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  shipping: {
    address_1: "456 Shipping Ave, Cityville",
    phone: "987-654-3210",
  },
  orderInfo: {
    id: 12345,
    payment_method: "Credit Card",
    subtotal: "250.00",
    discount_total: "25.00",
    shipping_total: "10.00",
    total: "235.00",
  },
  line_items: [
    {
      id: 1,
      name: "Product 1",
      image: {
        id: 1,
        src: "/path/to/product1.jpg",
      },
      price: 50.0,
      quantity: 2,
      total: "100.00",
    },
    // ... add more line items as needed
  ],
  textData: {
    headerText: "Order Details",
    backButtonText: "Back To List",
    address: {
      billingTitle: "BILLING ADDRESS",
      shippingTitle: "SHIPPING ADDRESS",
      location: "LOCATION",
      email: "EMAIL",
      phone: "PHONE",
    },
    pricing: {
      orderId: "Order ID",
      method: "Payment Method",
      subtotal: "Subtotal",
      discount: "Discount",
      shipping: "Shipping",
      total: "Total",
    },
    tableHeaders: {
      product: "PRODUCT",
      price: "PRICE",
      quantity: "QTY",
      quantityMobile: "QUANTITY",
      subtotal: "SUBTOTAL",
    },
  },
};

const MyOrderDetailsComponent = () => <OrderDetails {...orderDetailsData} />;

export default MyOrderDetailsComponent;
```

### Structure

The OrderDetails component consists of three main sections: header, details, and order items.

#### Header Section

The header section includes a title ("Order Details") and a link to navigate back to the order list.

#### Details Section

The details section is divided into billing, shipping, and order summary boxes. Each box displays relevant information, such as addresses, payment method, and order totals.

#### Order Items Section

The order items section displays a table of line items, including product name, price, quantity, and subtotal. It adjusts its layout based on the screen size for better responsiveness.

### Styling

The component uses Tailwind CSS classes for styling. You can customize the appearance by modifying these classes as needed.

### Default Data

The component includes default data for testing purposes. You can replace it with your own data when integrating the component into your application.
