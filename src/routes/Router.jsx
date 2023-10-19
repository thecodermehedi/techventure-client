import {createBrowserRouter} from "react-router-dom";
import RootPage from "../layouts/Root/RootPage";
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
import ViewProductPage from "../pages/ViewProduct/ViewProductPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/brand/:name",
        element: <Brandpage />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRouter>
            <AddProductPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/viewProduct/id/:id",
        element: (
          <PrivateRouter>
            <ViewProductPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/updateProduct/id/:id",
        element: (
          <PrivateRouter>
            <UpdateProductPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/userCart",
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
