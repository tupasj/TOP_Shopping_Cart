/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ClothesAPI from "../../api/ClothesAPI";
import { useContext } from "react";
import { ProductFilterContext } from "../../context/ProductFilterContext";
import { getSearchResults } from "../../utils/productUtils";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { AddToCartButton } from "../UI/AddToCartButton";
import { NoProductMatch } from "../Routes/NoProductMatch";

const FilteredProducts = (props) => {
  const type = props.type;
  const productsOfType = ClothesAPI.getProductsByType(type);
  const { searchQuery, setSearchQuery, filter } =
    useContext(ProductFilterContext);
  const [filteredProducts, setFilteredProducts] = useState(productsOfType);

  useEffect(() => {
    // Display search results
    if (searchQuery) {
      const searchResults = getSearchResults(searchQuery, productsOfType);
      setFilteredProducts(searchResults);
    }
    if (filter) {
      // filter = ["shirts", "pants"]
      // for each element in filter, filteredProducts.filter([i])
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, filter]);

  return (
    <>
      <div className="products">
        {filteredProducts[0] ? (
          filteredProducts.map((product) => {
            return (
              <div key={product.id} className="product">
                <Link to={`/product-view/${product.id}`}>
                  <img
                    className="product__image"
                    src={product.src}
                    alt={product.alt}
                  ></img>
                </Link>
                <div className="product__name">{product.name}</div>
                <div className="product__rating">
                  <Rating rating={product.rating} />
                </div>
                <div className="product__price">
                  {product.salePrice ? (
                    <>
                      ${product.salePrice}
                      <span className="product__price--line-through">
                        ${product.price}
                      </span>
                    </>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </div>
                <div className="product__buttons">
                  <AddToCartButton productID={product.id} />
                </div>
              </div>
            );
          })
        ) : (
          <NoProductMatch searchQuery={searchQuery} />
        )}
      </div>
    </>
  );
};

export { FilteredProducts };
