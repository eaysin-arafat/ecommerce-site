import { useState } from "react";
import { topProducts } from "../../../../data/data";
import Heading from "../../tamplate/Heading";
import ProdectItem from "./../product/ProdectItem";

export default function TopProducts() {
  const [data, setdata] = useState(topProducts);
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [category, setcategory] = useState(allCategories);
  console.log(setcategory);

  const handleFilter = (category) => {
    const newItem = topProducts.filter((item) => item.category === category);

    setdata(newItem);

    if (category === "all") {
      setdata(topProducts);
      return;
    }
  };

  return (
    <>
      <section className="px-5">
        <div>
          <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between">
            <Heading
              title="Top Selling Products"
              desc="Meet Our Newbies! The latest templates uploaded to the markenplace."
              margin="mb-8"
            />

            <div className="flex flex-wrap md:flex-none lg:flex-none gap-2 mb-10 md:mb-10 lg:mb-0 text-white">
              {category.map((category) => (
                <button
                  key={Math.floor()}
                  onClick={() => handleFilter(category)}
                  className="bg-rose-500 p-2 rounded-full font-semibold capitalize w-28 h-10 flex items-center justify-center text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <ProdectItem data={data} />
        </div>
      </section>
    </>
  );
}
