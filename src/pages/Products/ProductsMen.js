import ClothesAPI from "../../api/ClothesAPI";
import { UnfilteredProducts } from "../../components/Main/UnfilteredProducts";

const ProductsMen = () => {
  const products = ClothesAPI.getProductsByType("men");

  return <UnfilteredProducts products={products} />;
};

export { ProductsMen };
