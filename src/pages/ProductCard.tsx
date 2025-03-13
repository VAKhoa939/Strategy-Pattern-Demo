import { Product } from "../data/Products";
import "../styles/ProductCard.css";

interface Props {
  product: Product;
  addedMessageTimeouts: { [index: string]: number };
  setAddedMessageTimeouts: React.Dispatch<
    React.SetStateAction<{ [index: string]: number }>
  >;
}

const ProductCard = (props: Props) => {
  const { product, addedMessageTimeouts, setAddedMessageTimeouts } = props;

  const showAddedMessage = () => {
    const addedMessage = document.querySelector(
      `.js-added-to-cart-${product.id}`
    );
    if (addedMessage !== null) {
      addedMessage.classList.add("is-visible");

      const previousTimeoutId = addedMessageTimeouts[product.id];
      if (previousTimeoutId) {
        clearTimeout(previousTimeoutId);
      }

      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove("is-visible");
      }, 2000);

      setAddedMessageTimeouts((prev) => ({ ...prev, [product.id]: timeoutId }));
    }
  };

  return (
    <>
      <div className="product-container">
        <div className="product-image-container">
          <img className="product-image" src={"/" + product.image} />
        </div>
        <div className="product-name limit-text-to-2-lines">{product.name}</div>
        <div className="product-rating-container">
          <img
            className="product-rating-stars"
            src={"/" + product.getStarsUrl()}
          />
          <div className="product-rating-count link-primary">
            {product.rating.count}
          </div>
        </div>
        <div className="product-price">{product.getPrice()}</div>
        <div className="product-quantity-container">
          <select className={"js-quantity-selector-" + product.id}>
            <option selected value="1">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        {product.getExtraInfo()}
        <div className="product-spacer"></div>
        <div className={"js-added-to-cart-" + product.id + " added-to-cart"}>
          <img src="/images/icons/checkmark.png" />
          Added
        </div>
        <button
          className="js-add-to-cart add-to-cart-button button-primary"
          onClick={showAddedMessage}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
