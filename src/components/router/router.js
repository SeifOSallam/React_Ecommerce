import { Outlet, createBrowserRouter } from "react-router-dom"
import Home from "../home/home"
import ProductDetails from "../productDetails/productDetails"
import NavigationBar from "../navbar/navbar";
import Register from "../register/register";
import Profile from "../profile/profile";
function Layout() {
    return (
      <>
        <NavigationBar />
        <Outlet />
      </>
    );
  }

export const router = createBrowserRouter([
    {
        element: <Layout></Layout>,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path:"/products/:productID",
              element: <ProductDetails/>
            },
            {
              path:"/register",
              element: <Register/>
            },
            {
              path:"/profile",
              element: <Profile/>
            }
            // {
            //   path: "/form", 
            //   element: <Form />,
            // },
          ],
    }
])