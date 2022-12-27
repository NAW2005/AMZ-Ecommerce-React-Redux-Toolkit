import React from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {tosidebar} from '../service/store/slicer/product'
const Product = ({ product }) => {
  const dispatch = useDispatch()

  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className=" border border-[#e4e4e4] group  min-h-[300px] relative mb-4 transition">
        <div className=" w-full flex justify-center items-center h-[294px]">
          <div className=" w-[200px] flex mx-auto justify-center h-full items-center">
            <img
              className="max-h-[160px] cursor-pointer group-hover:scale-110 duration-200 transition"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* button */}
        <div className=" absolute top-6 -right-11 group-hover:right-2  p-2 flex flex-col  justify-center transition-all duration-300 items-center  gap-y-2 opacity-0 group-hover:opacity-100">
          <button>
            <div onClick={ () => dispatch(tosidebar(product))} className=" flex justify-center items-center text-white   w-10 h-10 bg-red-500 ">
              <BsPlus className=" text-2xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-10   h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl "
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div className="">
        <div className=" text-sm capitalize text-gray-500 z-50 mb-1">
          {category}
        </div>
        <Link to={`/product/${id}`}>
          <h2 className=" font-semibold mb-1">{title.substring(0, 25)}...</h2>
        </Link>
        <div className=" font-semibold ">$ {price}</div>
      </div>
      <div>11</div>
    </div>
  );
};

export default Product;
