import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLoggedInUserOrdersAsync,
  selectUserInfo,
  updateUserAsync,
} from "../userSlice";

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrdersAsync(user.id));
  }, []);

  const handleEdit = (e, index) => {};
  const handleRemove = (e, index) => {
    const newUser = { ...user, addresses: [...user.addresses] }; //for shallow copy
    newUser.addresses.splice(index, 1);
    dispatch(updateUserAsync(newUser));
  };

  return (
    <div>
      <div className="mx-auto mt-10 bg-white max-w-6xl px-4 sm:px-6 lg:px-6">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-3xl my-5 font-bold tracking-tight text-gray-900">
            Name:{user.name ? user.name : "New User"}
          </h1>
          <h3 className="text-xl my-5  tracking-tight text-red-500">
            Email Address:{user.email}
          </h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">Your Address :</p>
          {user.addresses.map((address) => (
            <div className="flex justify-between gap-x-6 py-5 px-5 border-solid border-2 border-gray-200">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.street}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.pinCode}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  {address.phone}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {address.city}
                </p>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <button
                  onClick={(e) => handleEdit(e, address.id)}
                  type="button"
                  className="font-medium text-indigo-800 hover:text-indigo-500"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => handleRemove(e, address.id)}
                  type="button"
                  className="font-medium text-indigo-800 hover:text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
