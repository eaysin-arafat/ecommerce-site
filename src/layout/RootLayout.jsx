import Header from "../components/Header";
import Fotter from "../components/Fotter";
import Pages from "../components/pages/Pages";

export default function RootLayout() {
  return (
    <div className="bg-gray-100">
      <header>
        <Header />
      </header>
      <main className="pt-[70px]">
        <Pages />
      </main>
      <footer>
        <Fotter />
      </footer>
    </div>
  );
}
