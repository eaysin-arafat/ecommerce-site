import { hero } from "../../../../data/data";

export default function Card() {
  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 my-16 mx-10 px-5">
        {hero.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div>
              <img src={item.cover} alt="" className="h-14 w-14 object-cover" />
            </div>
            <div>
              <h4 className="font-bold">{item.name}</h4>
              <p className="text-gray-500 font-semibold">{item.items} items</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
