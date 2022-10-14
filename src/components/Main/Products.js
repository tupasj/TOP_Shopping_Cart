import { FilteredProducts } from "./FilteredProducts";
import { useContext } from "react";
import { ProductFilterContext } from "../../context/ProductFilterContext";
import { UnfilteredProducts } from "./UnfilteredProducts";

const Products = (props) => {
  const type = props.type;
  const products = props.products;
  const { searchQuery, filter } = useContext(ProductFilterContext);

  return (
    <>
      {searchQuery || filter ? (
        <FilteredProducts type={type} />
      ) : (
        <UnfilteredProducts products={products} />
      )}
    </>
  );
};

export { Products };