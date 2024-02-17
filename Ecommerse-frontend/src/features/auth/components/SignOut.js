import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import { Navigate } from "react-router-dom";

export function SignOut() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(signOutAsync());
  });

  return <div>{!user && <Navigate to="/login" replace={true}></Navigate>}</div>;
}
