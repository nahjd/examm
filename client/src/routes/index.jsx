import Navbar from "./../components/Navbar/Navbar";

import Products from "../components/Products/Products";
import About from "../components/About/About";
import Special from "../components/Special/Special";
import Testimonials from "../components/Testimonials/Testimonials";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Basket from "../components/Basket/Basket";
import AddCard from "../components/AddCard/AddCard";
import Footer from "../components/Footer/Footer";

export const routes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/special",
        element: <Special />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/addcard",
        element: <AddCard />,
      },
      {
        path: "/special",
        element: <Special />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
];
