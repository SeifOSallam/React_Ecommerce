import { Outlet, createBrowserRouter } from "react-router-dom"
import Home from "../home/home"
import ProductDetails from "../productDetails/productDetails"
import NavigationBar from "../navbar/navbar";

function Layout() {
    return (
      <>
        <NavigationBar />
        {/* Outlet component rendr any route [matches url pathname in browser] */}
        <Outlet />
      </>
    );
  }
  
  function WithoutLayout() {
    return (
      <>
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
                path:"products/:productID",
                element: <ProductDetails/>
            },
            // {
            //   path: "/form", 
            //   element: <Form />,
            // },
          ],
    }
])