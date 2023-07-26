import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ADD, DELETE, REMOVE_INT } from "../../../controller/action";

export default function Details() {
  const [data, setdata] = useState([]);

  const getdata = useSelector((state) => state.cartReducer.carts);

  const { id } = useParams();

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id;
    });
    setdata(compareData);
  };

  useEffect(() => {
    compare();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const dispatch = useDispatch();
  const increment = (item) => {
    dispatch(ADD(item));
  };

  const decrement = (item) => {
    dispatch(REMOVE_INT(item));
  };

  const deletes = (id) => {
    dispatch(DELETE(id));
  };

  return (
    <>
      <section className="mx-5 my-4 mb-10">
        <div>
          <h2 className="text-2xl my-4 font-semibold">Product Details</h2>
          {data.map((item) => (
            <div className="flex justify-between gap-8" key={item.id}>
              <div className="w-1/2">
                <img className="h-full object-cover" src={item.cover} alt="" />
              </div>
              <div className="w-3/5">
                <h1>{item.title}</h1>
                <div className="flex items-center text-orange-600">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <label className="text-gray-600 font-semibold">
                    (1 customer review)
                  </label>
                </div>
                <h3 className="mt-2 text-lg font-bold">
                  ${item.price * item.qty}
                </h3>
                <p className="text-gray-800">{item.author}</p>
                <div className="flex gap-10 my-5">
                  <div className="flex items-center justify-evenly w-20 h-8 border-2 border-gray-300 rounded-sm font-semibold">
                    <button onClick={() => increment(item)}>
                      <AiOutlinePlus />
                    </button>
                    <span className="font-bold">{item.qty}</span>
                    <button
                      onClick={
                        item.qty <= 1
                          ? () => deletes(item.id)
                          : () => decrement(item)
                      }
                    >
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <button className="bg-[#0B2647] text-white px-10 font-semibold">
                    Add To Cart
                  </button>
                </div>
                <div>
                  <h4 className="uppercase font-semibold my-2 mt-7">
                    Products Description
                  </h4>
                  <p className="text-gray-500 text-justify">
                    The function value that you want to cache. It can take any
                    arguments and return any values. React will return (not
                    call!) your function back to you during the initial render.
                    On next renders, React will give you the same function again
                    if the dependencies have not changed since the last render.
                    Otherwise.
                  </p>
                  <h4 className="uppercase font-semibold my-1 mt-7">
                    Product Details
                  </h4>
                  <ul className="text-gray-500 flex flex-col gap-1">
                    <li>
                      <p>Meterial: Plastic, Wood</p>
                    </li>
                    <li>
                      <p>Legs: Lacquered Oak And Black Painted Ork</p>
                    </li>
                    <li>
                      <p>Dimensions and Weight: Heiggt : 80kg</p>
                    </li>
                    <li>
                      <p>Length: 48Cm</p>
                    </li>
                    <li>
                      <p>Depth: 52 Cm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
