import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditOrder = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    customerName: "",
    foodItem: "",
    quantity: 1,
    deliveryAddress: "",
    contactNumber: "",
    paymentMethod: "",
    totalprice: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://67b35c0d392f4aa94fa6e371.mockapi.io/home/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setForm(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://67b35c0d392f4aa94fa6e371.mockapi.io/home/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        setForm(updatedData);
        alert("Order updated successfully!");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error updating order:", error);
        alert("An error occurred while updating the order.");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">Edit Order</h1>
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="customerName" className="form-label">Customer Name:</label>
            <input type="text" className="form-control" id="customerName" value={form.customerName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="deliveryAddress" className="form-label">Address:</label>
            <textarea id="deliveryAddress" className="form-control" value={form.deliveryAddress} onChange={handleChange} required></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
            <input type="text" className="form-control" id="contactNumber" value={form.contactNumber} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="foodItem" className="form-label">Food Item:</label>
            <input type="text" className="form-control" id="foodItem" value={form.foodItem} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input type="number" className="form-control" id="quantity" value={form.quantity} onChange={handleChange} min="1" required />
          </div>

          <div className="mb-3">
            <label htmlFor="totalprice" className="form-label">Total Price:</label>
            <input type="text" className="form-control" id="totalprice" value={form.totalprice} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">Payment Method:</label>
            <select id="paymentMethod" className="form-control" value={form.paymentMethod} onChange={handleChange}>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="online">Online Payment</option>
            </select>
          </div>

          <div className="text-center">
            <button className="btn btn-primary" type="submit">Update Order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;
