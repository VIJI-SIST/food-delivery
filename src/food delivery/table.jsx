import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const api_url = "https://67b35c0d392f4aa94fa6e371.mockapi.io/home";

const FoodOrder = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setOrders(data.orders || data))
      .catch((error) => console.error("Error fetching orders: ", error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Food Delivery Orders</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Food Item</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Delivery Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.customerName}</td>
                <td>{order.foodItem}</td>
                <td>{order.quantity}</td>
                <td>${order.totalprice}</td>
                <td>{order.deliveryAddress}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/editinfo/${order.id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodOrder;
