import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ProductDetailsLayout from "../layout/ProductDetailsLayout";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />} />
          <Route path="/cart/:id" element={<ProductDetailsLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
