import Fotter from "../components/Fotter";
import Header from "../components/Header";
import Details from "../components/pages/details/Details";

export default function ProductDetailsLayout() {
  return (
    <div className="bg-gray-100">
      <header>
        <Header />
      </header>
      <main className="pt-[70px]">
        <Details />
      </main>
      <footer>
        <Fotter />
      </footer>
    </div>
  );
}
