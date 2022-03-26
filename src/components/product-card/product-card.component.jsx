import CustomBtn from "../custom-btn/Cutom-btn.component";
import "./product-card.styles.scss";
const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomBtn type="inverted">Add to cart</CustomBtn>
    </div>
  );
};
export default ProductCard;
