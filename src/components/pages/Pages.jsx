import Banner from "./banner/Banner";
import Blog from "./blog/Blog";
import Card from "./hero/Card";
import Hero from "./hero/Hero";
import Price from "./price/Price";
import Product from "./product/Product";
import Testimonial from "./testimonial/Testimonial";
import TopProducts from "./topProducts/topProducts";

export default function Pages() {
  return (
    <div>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProducts />
      <Price />
      <Testimonial />
      <Blog />
    </div>
  );
}
