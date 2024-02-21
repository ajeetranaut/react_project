export const TableData = {
  billing: {
    address_1: "4140 parker Rd, Allentown, 32255",
    email: "ressall@gamil.com",
    phone: "1234567890",
  },
  shipping: {
    address_1: "4140 parker Rd, Allentown, 32255",
    phone: "1234567890",
  },
  orderInfo: {
    id: 12345678,
    payment_method: "Paypal",
    subtotal: "433.00",
    discount_total: "20.00",
    shipping_total: "Free",
    total: "413.00",
  },
  line_items: [
    {
      id: 12345678,
      name: "Short Product Title Here...",
      image: {
        id: 12345678,
        src: "https://via.placeholder.com/150",
      },
      price: 100,
      quantity: 1,
      total: "100.00",
    },
    {
      id: 12345678,
      name: "Short Product Title Here...",
      image: {
        id: 12345678,
        src: "https://via.placeholder.com/150",
      },
      price: 100,
      quantity: 1,
      total: "100.00",
    },
    {
      id: 12345678,
      name: "Short Product Title Here...",
      image: {
        id: 12345678,
        src: "https://via.placeholder.com/150",
      },
      price: 100,
      quantity: 1,
      total: "100.00",
    },
  ],
  textData: {
    headerText: "Order Details",
    backButtonText: "Back To List",
    address: {
      billingTitle: "BILLING ADDRESS",
      shippingTitle: "SHIPPING ADDRESS",
      location: "LOCATION",
      email: "EMAIL",
      phone: "PHONE"
    },
    pricing: {
      orderId: "Order ID",
      method: "Payment Method",
      subtotal: "Subtotal",
      discount: "Discount",
      shipping: "Shipping",
      total: "Total"
    },
    tableHeaders: {
      product: "PRODUCT",
      price: "PRICE",
      quantity: "QTY",
      quantityMobile: "QUANTITY",
      subtotal: "SUBTOTAL"
    }
  }
};
