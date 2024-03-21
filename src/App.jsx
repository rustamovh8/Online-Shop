import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/Sign Up/Sign Up";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import ShopingCart from "./pages/ShopingCart/ShopingCart";
import Products from "./pages/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  // {
  //   path: "/registration",
  //   element: <Registration />,
  // },
  {
    path: "/catalog",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sign up",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "cart/:id",
        element: <Cart />,
      },
      {
        path: "shoppingcart",
        element: <ShopingCart />
      },
      {
        path: "products",
        element: <Products />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
