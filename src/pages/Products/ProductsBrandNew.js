import ClothesAPI from "../../api/ClothesAPI";
import { FilteredProducts } from "../../components/Main/FilteredProducts";
import { Products } from "../../components/Main/Products";

const ProductsBrandNew = (props) => {
  const filter = props.filter;
  const products = ClothesAPI.getProductsByType("brandNew");

  return (
    <>
      {filter[0] ? (
        <FilteredProducts filter={filter} products={products} />
      ) : (
        <Products products={products} />
      )}
    </>
  );
};

export { ProductsBrandNew };
