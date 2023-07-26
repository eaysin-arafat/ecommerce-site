import { banner } from "../../../../data/data";

export default function Banner() {
  return (
    <>
      <section className=" w-full px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-7 gap-6 place-items-center">
          {banner.map((item) => (
            <div key={item.id}>
              <div className="relative">
                <div className="">
                  <img
                    src={item.cover}
                    alt=""
                    className="w-screen lg:h-56 md:w-full lg:w-auto md:h-full object-cover rounded-md"
                  />
                </div>

                <div className="absolute top-0 lg:top-3 mx-8 lg:mx-0 md:mx-0 my-3 lg:my-0 md:my-0 lg:p-9 md:p-4 text-white">
                  <h2 className="text-base md:text-sm lg:text-lg font-semibold ">
                    {item.title1}
                  </h2>
                  <h2 className="text-base lg:text-lg md:text-sm font-semibold text-white">
                    {item.title2}
                  </h2>
                  <p className="text-sm lg:text-base md:text-xs my-2 md:my-2">
                    {item.desc}
                  </p>

                  <button className="uppercase bg-rose-500 p-4 rounded-full w-30 lg:w-40 h-8 lg:h-10 md:h-4 flex items-center justify-center text-sm lg:text-base md:text-sm">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
