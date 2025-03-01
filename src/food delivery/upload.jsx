import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const FoodOrder = () => {
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState({
        customerName: "",
        foodItem: "",
        quantity: 1,
        deliveryAddress: "",
        contactNumber: "",
        paymentMethod: "",
        totalprice:"",

    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setOrderData({
            ...orderData,
            [id]: value,
        });
    };

    const api_url = "https://67b35c0d392f4aa94fa6e371.mockapi.io/home";

    const handleSubmit = async () => {
        try {
            const response = await fetch(api_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });
            if (response.ok) {
                alert("Order placed successfully!");
                navigate("/home");
            } else {
                alert("Failed to place order. Try again!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container mt-3">
            <h1 className="text-center mb-4">Food Delivery Order Form</h1>
            <div className="card p-4">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                        <label htmlFor="customerName" className="form-label">Customer Name:</label>
                        <input
                            type="text"
                            id="customerName"
                            className="form-control"
                            value={orderData.customerName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="foodItem" className="form-label">Food Item:</label>
                        <input
                            type="text"
                            id="foodItem"
                            className="form-control"
                            value={orderData.foodItem}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            className="form-control"
                            value={orderData.quantity}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="deliveryAddress" className="form-label">Delivery Address:</label>
                        <textarea
                            id="deliveryAddress"
                            className="form-control"
                            value={orderData.deliveryAddress}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Price" className="form-label">Price:</label>
                        <input
                            type="number"
                            id="contactNumber"
                            className="form-control"
                            value={orderData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="paymentMethod" className="form-label">Payment Method:</label>
                        <select
                            id="paymentMethod"
                            className="form-control"
                            value={orderData.paymentMethod}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select payment method</option>
                            <option value="cash">Cash on Delivery</option>
                            <option value="credit-card">Credit Card</option>
                            <option value="debit-card">Debit Card</option>
                            <option value="upi">UPI Payment</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="totalprice" className="form-label">Contact Number:</label>
                        <input
                            type="number"
                            id="totalprice"
                            className="form-control"
                            value={orderData.totalprice}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="text-center">
                        <button className="btn btn-primary" onClick={handleSubmit}>Place Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FoodOrder;
