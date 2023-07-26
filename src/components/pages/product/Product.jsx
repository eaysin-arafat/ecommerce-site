import { products } from "../../../../data/data";
import Heading from "../../tamplate/Heading";
import ProdectItem from "./ProdectItem";

export default function Product() {
  return (
    <>
      <section className="px-5">
        <div>
          <Heading
            title="Trending Products"
            desc="Check the hottest designs of the week. These rising stars are worth your attention"
            place="text-center"
            margin="my-10"
          />

          <ProdectItem data={products} />
        </div>
      </section>
    </>
  );
}
