import { useEffect, useState } from "react";

export default function Discover() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((text) => setProducts(text.products));
  }, []);
  return (
    <>
      {products ? (
        <div className="grid">
          <div>
            <img
              src={products[0].images[1]}
              alt="Shirt"
              width="200"
              height="200"
            ></img>
            <p>{products[0].brand}</p>
            <p>{products[0].title}</p>
            <p>${products[0].price}</p>
            <button>Add to cart</button>
          </div>
          <div>
            <img
              src={products[1].images[1]}
              alt="Shirt"
              width="200"
              height="200"
            ></img>
            <p>{products[1].brand}</p>
            <p>{products[1].title}</p>
            <p>${products[1].price}</p>
            <button>Add to cart</button>
          </div>
          <div>
            <img
              src={products[2].images[1]}
              alt="Shirt"
              width="200"
              height="200"
            ></img>
            <p>{products[2].brand}</p>
            <p>{products[2].title}</p>
            <p>${products[2].price}</p>
            <button>Add to cart</button>
          </div>
          <div>
            <img
              src={products[3].images[1]}
              alt="Shirt"
              width="200"
              height="200"
            ></img>
            <p>{products[3].brand}</p>
            <p>{products[3].title}</p>
            <p>${products[3].price}</p>
            <button>Add to cart</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
