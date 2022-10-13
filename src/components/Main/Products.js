import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { AddToCartButton } from "../UI/AddToCartButton";
import ClothesAPI from "../../api/ClothesAPI";
import { useEffect, useState } from "react";
import { getSearchResults } from "../../utils/productUtils";

const Products = (props) => {
  const type = props.type;
  const filter = props.filter;
  const productsByType = ClothesAPI.getProductsByType(type);
  const [products, setProducts] = useState(productsByType);

  useEffect(() => {
    const productsByType = ClothesAPI.getProductsByType(type);
    setProducts(productsByType);
  }, [type]);

  useEffect(() => {
    if (typeof filter === "string") {
      const productsByType = ClothesAPI.getProductsByType(type);
      const searchQuery = filter;
      const searchResults = getSearchResults(searchQuery, productsByType);
      setProducts(searchResults);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="products">
      {products[0] &&
        products.map((product) => {
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
        })}
    </div>
  );
};

export { Products };
