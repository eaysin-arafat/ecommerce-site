/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavouriteList } from "../../controller/action";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function FavouriteList({ favouriteList, setfavouriteList }) {
  const [price, setprice] = useState(0);

  const handleClose = () => {
    setfavouriteList(null);
  };

  const dispatch = useDispatch();

  const delet = (id) => {
    dispatch(removeFavouriteList(id));
  };

  const getData = useSelector(
    (state) => state.favouriteCartReducer.favouriteCart
  );

  console.log(getData);

  const totals = useCallback(() => {
    let price = 0;
    getData.map((item) => {
      price = parseFloat(item.price) * item.qty + price;
    });
    setprice(price);
  }, [getData]);

  useEffect(() => {
    totals();
  }, [totals]);

  return (
    <>
      <section>
        <div
          className={
            favouriteList
              ? "fixed top-20 right-5 bg-white h-[455px] w-[370px] py-4 px-7 rounded-sm overflow-auto"
              : "hidden"
          }
        >
          {getData.length ? (
            <section>
              <div className="flex justify-between text-sm border-b-2 pb-2">
                <h3 className="font-semibold">Photo</h3>
                <p className="text-gray-400 font-semibold">Product Name</p>
              </div>

              <div>
                <div className="grid grid-rows-1 gap-5 my-5">
                  {getData.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-4
                         gap-2"
                    >
                      <div>
                        <Link to={`/cart/${item.id}`} onClick={handleClose}>
                          <img
                            className="h-16 w-16 rounded-full object-cover"
                            src={item.cover}
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="text-sm font-semibold text-gray-500 col-span-2 flex flex-col justify-center">
                        <p>{item.title.slice(0, 20)}...</p>
                        <p>Price : ${item.price}</p>
                        <p>Quality : {item.qty}</p>
                      </div>

                      <div className="flex items-center justify-end">
                        <i className="">
                          <AiOutlineDelete
                            onClick={() => delet(item.id)}
                            className="text-rose-600 cursor-pointer text-lg"
                          />
                        </i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold ml-1">Total : ${price}</h4>
              </div>
            </section>
          ) : (
            <div className="flex items-center justify-center">
              <p className="text-gray-400 font-semibold">Your cart is empty</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
