const checkDuplicateOrders = (ordersArray, currentProductID) => {
  for (let i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i].id === currentProductID) {
      return true;
    }
  }
  return false;
};

const updateOrderElementQuantity = (product, amount, ordersState, setOrdersState) => {
  const mutatedOrders = [...ordersState];
  const matchedOrder = mutatedOrders.find((order) => order.id === product.id);
  const matchedOrderIndex = mutatedOrders.indexOf(matchedOrder);
  const updatedQuantity = (matchedOrder.quantity += amount);
  const updatedOrder = {...matchedOrder, quantity: updatedQuantity};
  mutatedOrders[matchedOrderIndex] = updatedOrder;
  setOrdersState([...mutatedOrders]);
};

const updateOrderElementQuantityById = (elementID, ordersState, setOrdersState) => {
  const mutatedOrders = [...ordersState];
  const matchedOrder = mutatedOrders.find((order) => order.id === elementID);
  const matchedOrderIndex = mutatedOrders.indexOf(matchedOrder);
  const updatedQuantity = (matchedOrder.quantity += 1);
  const updatedOrder = {...matchedOrder, quantity: updatedQuantity};
  mutatedOrders[matchedOrderIndex] = updatedOrder;
  setOrdersState([...mutatedOrders]);
};


export { checkDuplicateOrders, updateOrderElementQuantity, updateOrderElementQuantityById};
