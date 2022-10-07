const checkDuplicateOrders = (ordersArray, currentProductID) => {
  for (let i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i].id === currentProductID) {
      return true;
    }
  }
  return false;
};

export { checkDuplicateOrders };
