import { useEffect, useState } from "react";
import { Products } from "./Products";
import { getFilterCategory, filterbyCategory } from "../../utils/filterUtils";

const FilteredProducts = (props) => {
  const filter = props.filter;
  const products = props.products;
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // For each filter, apply the filter to each product in the filteredProducts state
    for (let i = 0; i < filter.length; i++) {
      // Retrieve values
      const filterValue = filter[i];
      const filterCategory = getFilterCategory(filterValue);
      // Run function
      const appliedFilter = filterbyCategory(filteredProducts, filterCategory, filterValue); // Filters products array according to current filter.

      setFilteredProducts(appliedFilter);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <Products products={filteredProducts} />
    </>
  );
};

export { FilteredProducts };
