import "./NavigationBar.css";
import PropTypes from "prop-types";

export default function CartItem({ product, price, quantity }) {
  return (
    <div className="product-row">
      <p>{product}</p>
      <p>{price}</p>
      <p>{quantity}</p>
    </div>
  );
}
CartItem.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
