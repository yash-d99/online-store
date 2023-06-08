import "./NavigationBar.css";
import PropTypes from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
import { dataSlices } from "../Store/dataSlice";
export default function CartItem({ product, price, quantity, id }) {
  const dispatch=useDispatch()
  return (
    <div className="product-row">
      <p>{product}</p>
      <p>{price}</p>
      <Button onClick={()=>{
          dispatch(dataSlices.removeItemFromCart(id))
      }}> <RemoveIcon/></Button>
     <Button onClick={()=>{
  dispatch(dataSlices.addItemToCart(id))
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
