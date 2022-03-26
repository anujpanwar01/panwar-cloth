import { useContext } from "react";
import { CartContext } from "../../contex/cart.context";
import "./checkout-item.styles.scss";
const CheckoutItem = (item) => {
  const { name, imageUrl, quantity, price } = item;

  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  //handlers
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemToCart(item);
  const clearItemHandler = () => clearItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
