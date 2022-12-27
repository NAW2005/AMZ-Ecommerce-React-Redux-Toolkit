import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../service/api";
import { getproduct } from "../service/store/slicer/product";
import { useEffect } from "react";
import Product from "../components/Product";
const Home = () => {
  const products = useSelector((state) => state.main.product);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const Getdata = async () => {
    const data = await getdata("/products");
    setIsLoading(false);
    dispatch(getproduct(data));
  };
  // console.log(products);

  useEffect(() => {
    Getdata();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      <section className=" py-16">
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0 gap-[30px]">
            {products.map((product) => {
              return <Product product={product} key={product.id}/>
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
