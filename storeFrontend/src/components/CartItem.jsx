import "./NavigationBar.css";
import PropTypes from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
export default function CartItem({ product, price, quantity, id, onRemove,onAdd }) {
  return (
    <div className="product-row">
      <p>{product}</p>
      <p>{price}</p>
      <Button onClick={()=>{
           onRemove()

      }}> <RemoveIcon/></Button>
     <Button onClick={()=>{
      onAdd()
     }}> <AddIcon/></Button>
    
      <p>{quantity}</p>
    </div>
  );
}
CartItem.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
