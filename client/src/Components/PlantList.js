import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product } from "../redux/Action/ProductAction";

import PlantCard from "./PlantCard";

const PlanList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_product());
  }, [dispatch]);

  const product = useSelector((state) => state.productreducer.products);
  console.log(product);
  return (
    <div
      className="prod"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {product.map((prod) => (
        <PlantCard prod={prod} key={prod._id} />
      ))}
    </div>
  );
};

export default PlanList;
