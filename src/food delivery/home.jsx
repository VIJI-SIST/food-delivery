import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "https://67b35c0d392f4aa94fa6e371.mockapi.io/home";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4 display-4">Delicious Food Menu</h1>
      <p className="lead mb-4">Browse through our variety of delicious dishes.</p>

      {foods.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {foods.map((food) => (
            <div key={food.id} className="col">
              <div className="card shadow-sm rounded" style={{ width: "16rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{food.foodItem}</h5>
                  <p className="card-text text-muted">By {food.customerName}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ${food.totalprice}
                  </p>
                  <button
                    onClick={() => navigate(`/${food.id}`)}
                    className="btn btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
