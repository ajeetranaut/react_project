export const TabsData = [
  { name: "Active", slug: "active" },
  { name: "Completed", slug: "completed" },
  { name: "Cancelled", slug: "cancelled" },
];

export const TableData = {
  tabsData: TabsData,
  data: [
    {
      id: 12345678,
      date: "12-08-2022",
      itemLength: 3,
      total: 100,
      status: "pending",
    },
    {
      id: 12345678,
      date: "12-08-2022",
      itemLength: 3,
      total: 100,
      status: "processing",
    },
    {
      id: 12345678,
      date: "12-08-2022",
      itemLength: 3,
      total: 100,
      status: "completed",
    },
    {
      id: 12345678,
      date: "12-08-2022",
      itemLength: 3,
      total: 100,
      status: "cancelled",
    },
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
    }
  }
};

