import Heading from "../../tamplate/Heading";
import { price } from "../../../../data/data";

export default function Price() {
  return (
    <>
      <section className="bg-[#0B2647] px-5 mt-10 ">
        <div className="p-8 py-16">
          <Heading
            title="Choose The Plans"
            desc="Meet our Newbies! The latest tamplates uploaded to the marketplace"
            place="text-center"
            color="text-white"
            margin="mb-8"
          />

          <div className="block lg:grid lg:grid-cols-3 gap-10 mx-0 lg:mx-24">
            {price.map((item, index) => (
              <div
                key={item.id}
                className={`p-7 rounded-md relative overflow-hidden ${
                  index === 1 ? "bg-[#0A2950]" : ""
                }`}
              >
                <h3
                  className={`${
                    index === 0
                      ? "text-[#DD8EBC] font-bold text-2xl"
                      : "text-[#7ED79E] font-bold text-2xl"
                  } ${
                    index === 1 &&
                    "after:content-['Popular'] after:absolute after:-right-9 after:bg-pink-600 after:text-white after:rotate-45 after:px-9"
                  }`}
                >
                  {item.name}
                </h3>
                <div className="flex text-white my-2">
                  <span className="mt-1">$</span>
                  <h1 className="text-4xl font-bold">{item.price}</h1>
                  <label className="mt-3.5 text-gray-400">
                    /user per month
                  </label>
                </div>
                <p className="text-gray-400 text-sm mb-3">{item.desc}</p>

                <button className="rounded-full bg-red-600 p-2 text-sm text-white my-3 font-semibold w-2/3 h-11">
                  Get Standard
                </button>

                <ul className="">
                  {item.list.map((list) => (
                    <li
                      className="flex my-3 text-white font-semibold"
                      key={Math.floor()}
                    >
                      <i className="mr-4"> {list.icon}</i>
                      <span className="">{list.para}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
