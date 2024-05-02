import React from "react";
import { useGetProductQuery } from "../../context/productApi";
const Product = () => {
  let { data, isLoading, isError, error } = useGetProductQuery({
    limit: 10,
    count: 2,
  });
  let card = data?.data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.urls} alt="" />
      <h2>{el.title}</h2>
      <h3>
        ${el.price} <span>${el.oldPrice}</span>
      </h3>
    </div>
  ));
  return (
    <div className="bg">
      <div className="container product">
        <div className="cards">{card}</div>
      </div>
    </div>
  );
};

export default Product;
