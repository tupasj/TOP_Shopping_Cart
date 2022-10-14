import ClothesAPI from "../../api/ClothesAPI";
import { UnfilteredProducts } from "../../components/Main/UnfilteredProducts";

const ProductsAll = () => {
  const products = ClothesAPI.getProductsByType("all");

  return <UnfilteredProducts products={products} />;
};

export { ProductsAll };
