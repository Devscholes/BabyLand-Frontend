import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/Home/HomePage";
import Shop from "./page/Shop/Shop";
import LikesPage from "./page/Views/LikesPage";
import ProductPage from "./page/Vercel/ProductPage";
import Checkoutpage from "./page/Export/Checkoutpage";
import Blog from "./page/Storybook/Blog";
import Contact from "./page/Mail/Contact";
import FAQs from "./page/Messages/FAQs";
import ShoppingCart from "./page/Cart/ShoppingCart";
import Register from "./page/Secure/Register";
import Login from "./page/Log/Login";
import Error from "./page/Error/Error";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/likes" element={<LikesPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkoutpage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQs />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
