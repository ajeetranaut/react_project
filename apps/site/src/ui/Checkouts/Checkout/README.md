# ContactInfo Component

The `ContactInfo` component displays contact information, and it includes a loading state using the `react-loading-skeleton` library when the data is not available. The component receives an array of contact information as props and renders each contact block. If the data is not available (e.g., during loading), it displays a skeleton loading animation.

## Usage

Here is an example of how to import the Checkout component and use it in your code:

```jsx
import { Checkout } from "@/ui";

function YourComponent() {
  const [loading, setLoading] = useState(false);
  const [summaryData, setSummaryData] = useState({});
  const [cartData, setCartData] = useState([]);
  const [userData, setUserData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit = (data) => {
    // handle form submit
  };

  const summaryTextData = {
    headerText: "Order Summary",
    emptyText: "Your cart is empty",
    couponText: "Discount Coupon",
    couponButtonText: "Apply",
    subtotalText: "Subtotal",
    discountText: "Discount",
    totalText: "Total",
  };

  const billingTextData = {
    headerText: "Billing Details",
    returnCartText: "Return to cart",
    emptyText: "Your cart is currently empty.",
    fromText: {
      firstNamePlaceholder: "First Name",
      lastNamePlaceholder: "Last Name",
      companyPlaceholder: "Company Name",
      optionalText: "Optional",
      countryPlaceholder: "Select Country",
      countryLabel: "Country / Region",
      addressPlaceholder: "Address",
      addressLabel: "Street Address",
      cityPlaceholder: "City",
      cityLabel: "Your Town / City",
      statePlaceholder: "Select State",
      stateLabel: "Your State",
      postCodePlaceholder: "Your Post Code/Zip",
      postCodeLabel: "Postcode / ZIP",
      phonePlaceholder: "Your Phone",
      phoneLabel: "Phone",
      emailPlaceholder: "Your Email Address",
      emailLabel: "Email Address",
      orderButtonText: "Place Order",
      processButtonText: "Processing...",
    },
  };

  return (
    <Checkout
      loading={loading}
      formSubmit={onSubmit}
      summeryData={summaryData}
      cartData={cartData}
      userData={userData}
      autoFill
      userLogin={loggedIn}
      summaryTextData={summaryTextData}
      billingTextData={billingTextData}
    />
  );
}
```

In this example, we import the Checkout component from the UI component and use it in a functional component. We also set up some state variables to be passed as props to the Checkout component. The loading prop is used to display a loading spinner while the form is being submitted, the formSubmit prop is a callback function to handle the form submission, the summeryData, cartData, and userData props are used to display the order summary, cart items, and user information respectively, the autoFill prop is used to automatically fill the form fields if the user is logged in, the userLogin prop is used to check the user login status.
Please make sure that you have the necessary data to pass to the component as props.

## Checkout Component Props

The `Checkout` component is designed to handle the checkout process in an e-commerce application. It receives various props to manage user data, cart information, form submissions, and display text data related to the checkout process.

### User Data Interfaces

```typescript
interface userDataInterface {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  address_1?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  company?: string;
}
```

### Cart Data Interfaces

```typescript
interface cartDataInterface {
  id: number;
  title: string;
  totals: {
    total: number;
  };
  featured_image: string;
}
```

### Summery Data Interface

```typescript
interface summeryDataInterface {
  total: number;
  subtotal: number;
  discount: number;
}
```

### Policy Data Interface

```typescript
interface policyDataInterface {
  title: string;
  description: string;
  link: {
    title: string;
    url: string;
    target: string;
  };
}
```

### Sign Up Data Interface

```typescript
interface signUpDataInterface {
  title: string;
}
```

### Company Policy Data Interface

```typescript
interface companyPolicyDataInterface {
  title: string;
  companyName: string;
  link: {
    title: string;
    url: string;
    target: string;
  };
}
```

### Total available Component Props

```typescript
type ComponentProps = {
  loading?: boolean;
  userData?: userDataInterface;
  formSubmit?: (data: any) => void;
  formLoader?: boolean;
  couponSubmit?: (data: any) => void;
  couponLoader?: boolean;
  removeCouponHandler?: () => void;
  autoFill?: boolean;
  cartData?: cartDataInterface[];
  summeryData?: summeryDataInterface;
  policyData?: policyDataInterface;
  signUpData?: signUpDataInterface;
  companyPolicyData?: companyPolicyDataInterface;
  userLogin?: boolean;
  summaryTextData?: {
    headerText: string;
    emptyText: string;
    couponText: string;
    couponButtonText: string;
    subtotalText: string;
    discountText: string;
    totalText: string;
  };
  billingTextData?: {
    headerText: string;
    returnCartText: string;
    emptyText: string;
    fromText: {
      firstNamePlaceholder: string;
      lastNamePlaceholder: string;
      companyPlaceholder: string;
      optionalText: string;
      countryPlaceholder: string;
      countryLabel: string;
      addressPlaceholder: string;
      addressLabel: string;
      cityPlaceholder: string;
      cityLabel: string;
      statePlaceholder: string;
      stateLabel: string;
      postCodePlaceholder: string;
      postCodeLabel: string;
      phonePlaceholder: string;
      phoneLabel: string;
      emailPlaceholder: string;
      emailLabel: string;
      orderButtonText: string;
      processButtonText: string;
    };
  };
};
```

### Notes

- Ensure that the data passed to the component adheres to the specified interfaces.

- Customize the component according to your application's design and functionality.

- Integrate necessary dependencies and styles in your project for proper component rendering.
