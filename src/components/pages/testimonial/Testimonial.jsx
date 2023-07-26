import { customer } from "../../../../data/data";
import { ImQuotesRight } from "react-icons/im";
import Heading from "../../tamplate/Heading";

export default function Testimonial() {
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

          <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-5 relative">
            {customer.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-3 bg-white rounded-md p-8"
              >
                <button className="absolute -top-5 shadow-md p-3.5 rounded-full bg-white text-gray-700 hover:text-white hover:bg-rose-500 transition-all duration-300">
                  <ImQuotesRight />
                </button>

                <p className="text-base text-justify my-4">{`"${item.desc}"`}</p>
                <h3 className="font-bold">{item.name}</h3>
                <span className="text-gray-500 font-semibold">{item.post}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
