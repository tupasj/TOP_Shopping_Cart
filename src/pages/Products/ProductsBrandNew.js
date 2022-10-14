import ClothesAPI from "../../api/ClothesAPI";
import { UnfilteredProducts } from "../../components/Main/UnfilteredProducts";

const ProductsBrandNew = () => {
  const products = ClothesAPI.getProductsByType("brandNew");

  return <UnfilteredProducts products={products} />;
};

export { ProductsBrandNew };
