import React from "react";

import { IoMdArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { changefalse } from "../service/store/slicer/chagne";

const Sidebar = () => {
  const data = useSelector((state) => state.forchange.main);
  const dispatch = useDispatch();

  const Datasider = useSelector((state) => state.main.sider);
  const newitem = { ...Datasider, amount: 0 };
  console.log(newitem);

 

  return (
    <div>
      sidebar
      <div
        className={`${
          data ? "right-0" : "-right-full"
        } bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
      >
        <div className=" flex items-center justify-between py-6 border-b">
          <div className=" uppercase font-semibold text-sm">
            Shopoing Bag (0)
          </div>
          <div
            onClick={() => dispatch(changefalse())}
            className=" cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className=" text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
