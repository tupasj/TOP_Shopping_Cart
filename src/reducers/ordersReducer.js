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
    case "change quantity": {
      if (action.payload.quantity >= 1) {
        return orders.filter((order) =>
          order.id === action.payload.id
            ? (order.quantity = action.payload.quantity)
            : order.quantity
        );
      } else {
        return orders.filter((order) =>
        order.quantity
        );
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export { ordersReducer };
