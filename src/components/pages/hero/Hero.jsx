/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchProducts from "../product/SearchProducts";
import { products } from "./../../../../data/data";

export default function Hero() {
  const [value, setvalue] = useState("");

  const onChange = (e) => {
    setvalue(e.target.value);
  };

  const onSearch = (key) => {
    setvalue(key);
    console.log("search", key);
  };

  return (
    <div className="h-max mt-24 bg-[url('../../assets/bg-dot.png')] px-5">
      <div className="text-center">
        <h1 className="text-3xl font-medium mb-4">
          <label>
            Over <span className="text-orange-700 text-4xl">6,500</span> Curated
            Design
          </label>
          <br />
          <label>
            Resources,{" "}
            <span className="text-orange-700 text-4xl">Graphic & Website </span>{" "}
            Templates
          </label>
        </h1>
        <p className="text-gray-500 font-medium">
          High-quality Design Themes for personal or commercial use contains 6k+
          items in 100 categories.
        </p>

        <div className="bg-white mx-60px-5 gap-4 rounded-full shadow-sm mt-6 h-10 flex justify-around items-center px-5 lg:mx-44">
          <span className="pr-2 border-r border-gray-400 my-1 flex-none">
            All Categories
          </span>
          <input
            type="text"
            className="outline-none flex-1"
            onChange={onChange}
            value={value}
          />
          <button className="flex-none" onClick={() => onSearch(value)}>
            <BiSearch />
          </button>
        </div>

        <SearchProducts products={products} value={value} />

        <p className="text-gray-500 mt-5">
          Examples: Mockup, PSD, Theme Design, Image...
        </p>
      </div>
    </div>
  );
}
