import { useEffect, useState } from "react";
import { Product, fetchedProducts } from "../data/Products";
import ProductCard from "./ProductCard";
import "../styles/ProductsGrid.css";
import SorterMenu from "./SorterMenu";

const ProductsGrid = () => {
  const [addedMessageTimeouts, setAddedMessageTimeouts] = useState<{
    [index: string]: number;
  }>({} as { [index: string]: number });
  const [products, setProducts] = useState<Product[]>([] as Product[]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setProducts(fetchedProducts);
    setLoading(false);
  }, []);

  return (
    <>
      <div className="main">
        <SorterMenu products={products} setProducts={setProducts} />
        <div className="js-products-grid products-grid">
          <>
            {!loading &&
              products.map((product) => (
                <ProductCard
                  product={product}
                  addedMessageTimeouts={addedMessageTimeouts}
                  setAddedMessageTimeouts={setAddedMessageTimeouts}
                />
              ))}
          </>
        </div>
      </div>
    </>
  );
};

export default ProductsGrid;
