import { blog } from "../../../../data/data";
import Heading from "../../tamplate/Heading";

export default function Blog() {
  return (
    <>
      <section className="px-5 pb-10">
        <div>
          <Heading
            title="Choose The Plans"
            desc="Meet our Newbies! The latest tamplates uploaded to the marketplace"
            place="text-center"
            color="text-black"
            margin="my-8"
          />

          <div className="flex flex-col lg:flex-row justify-around gap-5 ">
            {blog.slice(0, 3).map((item) => (
              <div className="relative" key={item.id}>
                <img className="rounded-md w-full" src={item.cover} alt="" />

                <div className="absolute top-0 p-6 flex flex-col justify-center lg:justify-between gap-2 lg:gap-16 bg-gray-900 bg-opacity-40 h-full w-full rounded-md">
                  <button className="rounded-full bg-red-600 p-2 text-base text-white my-1 lg:my-3 font-semibold w-28 h-10 capitalize">
                    {item.category}
                  </button>
                  <div>
                    <p className="text-white mb-1">
                      Post Date:{" "}
                      <span className="text-rose-500">{item.date}</span>
                    </p>
                    <h3 className="text-white font-semibold">
                      {item.title.slice(0, 35)}...
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
