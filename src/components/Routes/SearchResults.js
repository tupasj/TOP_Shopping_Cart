import { FilteredProducts } from "../Main/FilteredProducts";
import { Products } from "../Main/Products";
import { getSearchResults } from "../../utils/productUtils";
import ClothesAPI from "../../api/ClothesAPI";
import { useEffect } from "react";

const SearchResults = (props) => {
  const filter = props.filter;
  const searchQuery = props.searchQuery;
  const type = props.type;
  const productsOfType = ClothesAPI.getProductsByType(type);
  const searchResults = getSearchResults(searchQuery, productsOfType);

  useEffect(() => {
    console.log("filter: ", filter);
  }, [filter]);

  return (
    <>
      {filter[0] ? (
        <FilteredProducts filter={filter} products={searchResults} />
      ) : (
        <Products products={searchResults} />
      )}
    </>
  );
};

export { SearchResults };