/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ADD, addFavouriteList } from "../../../controller/action";

export default function ProdectItem({ data }) {
  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("");

  const onOpenImage = (src) => {
    setImg(src);
    setOpenImage(true);
  };

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(ADD(item));
  };

  const addToFavouriteList = (item) => {
    dispatch(addFavouriteList(item));
  };

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-content-center gap-6">
        {data.map((items) => (
          <div key={items.id} className="group relative">
            <div className="">
              <img
                src={items.cover}
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="absolute flex items-center justify-center gap-4 lg:gap-8 md:gap-8 opacity-0 m-auto top-28 lg:top-1/2 md:top-1/2 left-0 right-0 group-hover:opacity-100 transition-all duration-500">
                <button className="bg-white p-3 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300">
                  <FiShoppingBag onClick={() => addToCart(items)} />
                </button>
                <button
                  className="bg-white p-3 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300"
                  onClick={() => addToFavouriteList(items)}
                >
                  <AiOutlineHeart />
                </button>
                <button
                  className="bg-white p-3 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300"
                  onClick={() => onOpenImage(items.cover)}
                >
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className="mt-1">
              <h3 className="font-semibold text-sm">{items.title}</h3>
              <p className=" text-gray-500">{items.author}</p>
              <h4 className="font-bold">Price : ${items.price}</h4>
            </div>
          </div>
        ))}
      </div>

      <div
        className={
          openImage
            ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 transition-all duration-500"
            : "hidden"
        }
      >
        <div className="flex items-center justify-center ">
          <div className="fixed top-40 m-auto h-96 w-96">
            <img src={img} alt="" className="object-cover" />
            <button
              className="absolute bg-rose-500 -top-3 -right-3 p-2 rounded-full"
              onClick={() => setOpenImage(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
