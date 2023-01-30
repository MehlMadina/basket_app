import React from "react";
import s from "./style.module.css";

export default function Product({
  id,
  title,
  price,
  image,
  rating,
  deleteProduct,
  changeCount,

}) {


  return (
    <div>
      {rating.count !== 0 ? (
        <div className={s.card}>
          <button onClick={() => deleteProduct(id)} className={s.del_btn}>
            ✖
          </button>
          <p className={s.title}>{title}</p>
          <p className={s.price}>{price}$</p>
          <img src={image} alt="#" className={s.image} />
          <div className={s.triggers_btn}>
            <button onClick={() => changeCount(id, -1)}>-</button>
            <p>{rating.count}</p>
            <button onClick={() => changeCount(id, 1)}>+</button>
          </div>
          <p className={s.total_info}>
            {price}$ X {rating.count} = {price * rating.count}$
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
