import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <div className="border-2 border-blue-700 mb-6 rounded-xl transition duration-300 hover:shadow-custom">
      <div className="py-4" style={{ minWidth: "300px", minHeight: "300px" }}>
        <Link
          to={`/product/${props.id}`}>
          <img src={props.img} alt={props.title} />
        </Link>
      </div>
      <div className="border-t-2 pt-3 border-blue-700">
        <div className="flex justify-center items-center">
          <p className="font-bold text-base text-blue-900 md:text-xl">
            {props.title}
          </p>
        </div>
        <div className="flex justify-between px-2 text-blue-900 text-sm md:text-lg pt-2">
          <span>{props.price} تومان</span>
          <span className="flex">
            {props.rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill text-lg"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                fill="#d6e600"
              ></path>{" "}
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
