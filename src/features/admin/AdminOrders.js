import { useDispatch, useSelector } from "react-redux";
import { ITEMS_PER_PAGE, discountedPrice } from "../../app/constants";
import { useState, useEffect } from "react";
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrders,
  updateOrderAsync,
} from "../order/orderSlice";
import { EyeIcon, PencilIcon } from "@heroicons/react/20/solid";
import Pagination from "../common/Pagination";

export default function AdminOrders() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const [page, setPage] = useState(1);
  const [editableOrderId, setEditableOrderId] = useState(-1);

  const handleshow = (order) => {
    console.log("handleshow");
  };

  const handleEdit = (order) => {
    setEditableOrderId(order.id);
  };

  const handleUpdate = (e, order) => {
    const updateOrder = { ...order, status: e.target.value };
    dispatch(updateOrderAsync(updateOrder));
    setEditableOrderId(-1);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-purple-200 text-purple-600";
      case "dispatched":
        return "bg-yellow-200 text-yellow-600";
      case "delivered":
        return "bg-green-200 text-green-600";
      case "cancelled":
        return "bg-red-200 text-red-600";
      default:
        return "bg-purple-200 text-purple-600";
    }
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync({ pagination }));
  }, [dispatch, page]);

  return (
    <div className="overflow-x-auto">
      <div className=" bg-gray-100 flex items-center justify-cente font-sans overflow-hidden">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6">
            <table className=" w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Order</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Stock/Price</th>
                  <th className="py-3 px-6 text-left">total Amount</th>
                  <th className="py-3 px-6 text-center">Shipping Address</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {orders.map((order) => (
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-medium">{order.id}</span>
                      </div>
                    </td>

                    <td className="py-3 px-6 text-left">
                      {order.items.map((item) => (
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img
                              className="w-6 h-6 rounded-full"
                              src={item.thumbnail}
                            />
                          </div>
                          <span>{item.title}</span>
                        </div>
                      ))}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {order.items.map((item) => (
                        <div className="flex items-center">
                          <div className="mr-2">
                            <span>
                              ${discountedPrice(item)}/#{item.quantity}
                            </span>
                          </div>
                        </div>
                      ))}
                    </td>

                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div></div>
                        <span>${order.totalAmount}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className=" items-center justify-center">
                        <div>
                          <span>{order.selectedAddress.name}</span>
                        </div>
                        <div>{order.selectedAddress.street}</div>
                        <div>{order.selectedAddress.city}</div>
                        <div>{order.selectedAddress.state}</div>
                        <div>{order.selectedAddress.pinCode}</div>
                        <div>{order.selectedAddress.phone}</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      {order.id === editableOrderId ? (
                        <select onChange={(e) => handleUpdate(e, order)}>
                          <option value="pending">Pending</option>
                          <option value="dispatched">Dispatched</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      ) : (
                        <span
                          className={`${chooseColor(
                            order.status
                          )}py-1 px-3 rounded-full text-xs`}
                        >
                          {order.status}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-6 mr-4 transform hover:text-purple-500 hover:scale-110">
                          <EyeIcon onClick={(e) => handleshow(order)}></EyeIcon>
                        </div>
                        <div className="w-6 mr-1 transform hover:text-purple-500 hover:scale-110">
                          <PencilIcon
                            onClick={() => handleEdit(order)}
                          ></PencilIcon>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        handlePage={handlePage}
        totalItems={totalOrders}
      ></Pagination>
    </div>
  );
}
