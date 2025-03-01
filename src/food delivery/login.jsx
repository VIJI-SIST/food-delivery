import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FoodDeliveryLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock credentials for demonstration
    if (email === 'admin' && password === 'admin') {
      alert('Login Successful!');
      navigate('/home'); // Redirect to the dashboard
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="content">
      <div className="text">Food Delivery Login</div>
      <form onSubmit={handleSubmit}>

        <div className="field">
          <input
            required
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label">Email</label>
        </div>

        <div className="field">
          <input
            required
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label">Password</label>
        </div>

        <button className="button" type="submit">Login</button>

      </form>
    </div>
  );
};

export default FoodDeliveryLogin;
