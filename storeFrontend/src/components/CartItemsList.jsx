import CartItem from "./CartItem";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataSlices } from "../Store/dataSlice";

export default function CartItems() {
  const items = useSelector((state) => state.items);
  const total = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <div className="product-row">
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
      </div>
      {items.map((doc) => (
        <div key={doc.id}>
          <CartItem
            id={doc.id}
            product={doc.name}
            price={doc.price}
            quantity={doc.quantity}
            onAdd={() => {
              dispatch(
                dataSlices.addItemToCart({
                  name: doc.name,
                  price: doc.price,
                  id: doc.id,
                })
              );
            }}
            onRemove={() => {
              dispatch(dataSlices.removeItemFromCart(doc.id));
            }}
          />
        </div>
      ))}
      <h5 style={{ color: "black" }}>
        Total price of your cart: {total ? total.toFixed(2) : 0.0}
      </h5>
    </>
  );
}
