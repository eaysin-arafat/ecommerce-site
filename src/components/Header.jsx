// import { BisSearch } from "react-icons/bi";
import { navlist } from "../../data/data";
import { Link } from "react-router-dom";
import img from "../assets/logo.svg";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import { BsBagCheck } from "react-icons/bs";
import { useState } from "react";
import { connect, useSelector } from "react-redux";
import CartList from "./toggleComponent/CartList";
import FavouriteList from "./toggleComponent/FavouriteList";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartList, setCartList] = useState(false);
  const [favouriteList, setfavouriteList] = useState(false);

  const getData = useSelector((state) => state.cartReducer.carts);

  return (
    <>
      <div className="bg-opacity-5 lg:fixed lg:top-0 w-full shadow-md lg:fixed-top z-40 relative">
        <div className="flex h-[70px] justify-between px-5 bg-gray-100 ">
          <nav className="flex lg:gap-x-12 gap-x-4">
            <button
              className="lg:hidden sm:mr-5 font-bold"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <AiOutlineClose className="text-rose-600" />
              ) : (
                <AiOutlineMenu />
              )}
            </button>

            <img
              src={img}
              alt=""
              className="w-20 cursor-pointer sm:text-center"
            />

            <ul
              className={` ${
                isOpen
                  ? "flex flex-col justify-start items-start gap-5 absolute top-0 left-0 bg-white h-screen w-1/2 pl-5 pt-5"
                  : "hidden"
              } lg:flex lg:flex-row gap-6 lg:gap-x-5 lg:items-center lg:justify-center absolute lg:static mt-[70px] lg:mt-0  transition-all`}
            >
              {navlist.map((nav) => (
                <li
                  className="lg:flex uppercase text-sm first:mt-3 lg:first:mt-0"
                  key={Math.random()}
                >
                  <Link
                    className="font-semibold hover:text-red-700 mb-3 lg:mb-0"
                    to={nav.path}
                  >
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-center lg:gap-x-7 gap-x-3">
            <div className="lg:flex lg:items-center lg:justify-center hidden">
              <input
                type="text"
                placeholder="Search Products..."
                className="h-10 rounded-full place-content-center bg-white px-5 outline-none text-sm shadow-sm"
              />
              <BiSearch className="absolute ml-36 w-4 h-4" />
            </div>
            <RiUser3Line className="cursor-pointer" />
            <AiOutlineHeart
              className="cursor-pointer"
              onClick={() => setfavouriteList(!favouriteList)}
            />
            <button
              className="flex items-center justify-center gap-x-2 rounded-full bg-red-600 p-2 text-sm w-32 text-white"
              onClick={() => setCartList(!cartList)}
            >
              <BsBagCheck />
              MY CART ({getData.length})
            </button>
          </div>
        </div>

        <FavouriteList
          favouriteList={favouriteList}
          setfavouriteList={setfavouriteList}
        />

        <CartList cartList={cartList} setCartList={setCartList} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Header);
