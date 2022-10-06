import MensClothing from "../assets/data/MensClothing.json";
import WomensClothing from "../assets/data/WomensClothing.json";

const _allProducts = MensClothing.Set1.concat(WomensClothing.Set1);

const getCurrentProduct = (urlParam) => {
  const currentProduct = _allProducts.find(
    (product) => product.id === urlParam.paramId
  );
  return currentProduct;
};

const getCurrentProductById = (productID) => {
  const currentProduct = _allProducts.find(
    (product) => product.id === productID
  );
  return currentProduct;
};

const makeOrder = (currentProduct, productQuantity) => {
  const productSalePrice = currentProduct.salePrice
    ? currentProduct.salePrice
    : false;

  const order = {
    id: currentProduct.id,
    name: currentProduct.name,
    src: currentProduct.src,
    alt: currentProduct.alt,
    price: currentProduct.price,
    salePrice: productSalePrice,
    quantity: productQuantity,
  };

  return order;
};

const getFilteredProducts = (type) => {
  let filter;
  if (type !== "men" && type !== "women") {
    filter = type;
  }

  const getProductType = (type) => {
    let clothes;
    if (type === "men") {
      clothes = MensClothing.Set1;
    } else if (type === "women") {
      clothes = WomensClothing.Set1;
    } else {
      clothes = MensClothing.Set1.concat(WomensClothing.Set1);
    }
    return clothes;
  };

  let clothes = getProductType(type);

  if (filter === "brandNew") {
    clothes = clothes.filter((element) => element.brandNew);
  } else if (filter === "onSale") {
    clothes = clothes.filter((element) => element.salePrice);
  }

  return clothes;
};

const ClothesAPI = {
  getCurrentProduct: getCurrentProduct,
  getCurrentProductById: getCurrentProductById,
  makeOrder: makeOrder,
  getFilteredProducts: getFilteredProducts,
};

export default ClothesAPI;
