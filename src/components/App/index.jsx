import { useState, useEffect } from "react";
import Product from "../Product";
import s from "./style.module.css";

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((json) => setProducts(json));
  }, []);



  const deleteProduct = (delId) => {
    const newArr = products.filter(({ id }) => id !== delId);
    setProducts(newArr);
  };


  const changeCount = (changeId, value) => {
    const target = products.find(({ id }) => id === changeId);

    if (target.rating.count + value < 0) {
      target.rating.count = 0;
    } else {
      target.rating.count += value;
    }
    setProducts([...products]);
  };



  return (
    <div>
      <p className={s.info_total}>SHOPPING CART</p>
      <div className={s.cards_block}>
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            deleteProduct={deleteProduct}
            changeCount={changeCount}
          />
        ))}
      </div>

      <div className={s.info_total}>
        <p>
          Total cost: {""}
          {products.reduce(
            (prev, { price, rating }) => prev + price * rating.count,
            0
          )}
          $
        </p>
        <p>
          Total count: {""}
          {products.reduce((prev, { rating }) => prev + +rating.count, 0)}
        </p>
      </div>
    </div>
  );
}

export default App;
