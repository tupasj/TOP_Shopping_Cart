import ClothesAPI from "../../api/ClothesAPI";
import { UnfilteredProducts } from "../../components/Main/UnfilteredProducts";

const ProductsWomen = () => {
  const products = ClothesAPI.getProductsByType("women");

  return <UnfilteredProducts products={products} />;
};

export { ProductsWomen };
