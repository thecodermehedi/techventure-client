import {createBrowserRouter} from "react-router-dom";
import Main from './../layouts/Main/Main';
import Errorpage from './../pages/Error/Errorpage';
import Homepage from './../pages/Home/Homepage';
import AddProductPage from './../pages/AddProduct/AddProductPage';
import UpdateProductPage from './../pages/UpdateProduct/UpdateProductPage';
import MyCartPage from './../pages/MyCart/MyCartPage';
import Loginpage from './../pages/Login/Loginpage';
import RegisterPage from './../pages/Signup/RegisterPage';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path:"/addproduct",
        element:<AddProductPage/>
      },
      {
        path:"/updateproduct/:id",
        element:<UpdateProductPage/>
      },
      {
        path:"/cart",
        element:<MyCartPage/>
      },
      {
        path:"/login",
        element:<Loginpage/>
      },
      {
        path:"/register",
        element:<RegisterPage/>
      }
    ]
  },
]);



export default Router;