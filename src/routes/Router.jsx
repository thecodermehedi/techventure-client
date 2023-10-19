import {createBrowserRouter} from "react-router-dom";
import Main from "./../layouts/Main/Main";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Homepage from "./../pages/Home/Homepage";
import Loginpage from "./../pages/Login/Loginpage";
import Errorpage from "./../pages/Error/Errorpage";
import MyCartPage from "./../pages/MyCart/MyCartPage";
import RegisterPage from "../pages/Register/RegisterPage";
import AddProductPage from "./../pages/AddProduct/AddProductPage";
import UpdateProductPage from "./../pages/UpdateProduct/UpdateProductPage";
import Brandpage from "./../pages/Brand/Brandpage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/brand/:id",
        element: <Brandpage />,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRouter>
            <AddProductPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRouter>
            <UpdateProductPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRouter>
            <MyCartPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRouter>
            <Loginpage />
          </PublicRouter>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRouter>
            <RegisterPage />
          </PublicRouter>
        ),
      },
    ],
  },
]);

export default Router;
