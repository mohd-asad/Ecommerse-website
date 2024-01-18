import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckoutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";
import { fetchProductByUserIdAsync } from "./features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectLoggedInUser } from "./features/auth/authSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element:(<Protected><Home></Home></Protected>),
  },
  {
    path: "/Login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/Signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
]);

function App() {

  const dispatch=useDispatch();
  const user=useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user)
      dispatch(fetchProductByUserIdAsync(user.id));
  },[dispatch,user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
