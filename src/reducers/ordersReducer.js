const ordersReducer = (orders, action) => {
  switch (action.type) {
    case "added": {
      return [...orders, action.newOrder];
    }
    case "deleted": {
      return orders.filter((order) => order.id !== action.id);
    }
    case "set": {
      return [...action.newOrders];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export { ordersReducer };
