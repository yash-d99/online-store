import CartItem from "./CartItem";
export default function CartItems() {
  let total = 0;
  const items = [
    {
      product: "Shirt",
      price: 20,
      quantity: 1,
    },
    {
      product: "Pants",
      price: 15,
      quantity: 2,
    },
    {
      product: "Hat",
      price: 15,
      quantity: 3,
    },
  ];
  const totalPrice = () => {
    items.map(({ price, quantity }) => {
      total += price * quantity;
    });
    console.log(total);
  };
  totalPrice();
  return (
    <>
      <div className="product-row">
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
      </div>
      {items.map((doc, index) => (
        <div key={index}>
          <CartItem
            product={doc.product}
            price={doc.price}
            quantity={doc.quantity}
          />
        </div>
      ))}
      <h5 style={{ color: "black" }}>Total price of your cart: {total}</h5>
    </>
  );
}
