import ClothesAPI from "../../api/ClothesAPI";
import { UnfilteredProducts } from "../../components/Main/UnfilteredProducts";

const ProductsOnSale = () => {
  const products = ClothesAPI.getProductsByType("onSale");

  return <UnfilteredProducts products={products} />;
};

export { ProductsOnSale };
