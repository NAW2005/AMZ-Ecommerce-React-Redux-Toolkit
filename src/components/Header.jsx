import React from "react";

import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {chagneture} from '../service/store/slicer/chagne'

const Header = () => {
  const data = useSelector((state) => state.forchange.main)
  const dispatch = useDispatch()

  return (
    <div className="">
      <div>Header</div>
      <div onClick={() => dispatch(chagneture())} className="cursor-pointer flex relative">
        <BsBag className=" text-2xl" />
      </div>
    </div>
  );
};

export default Header;
