import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import FoodDeliveryLogin from './food delivery/login.jsx';
import Home from './food delivery/home.jsx';
import FoodOrderInfo from './food delivery/foodinfo.jsx';
import Table from './food delivery/table.jsx';
import Upload from './food delivery/upload.jsx';
import EditOrder from './food delivery/editinfo.jsx';
import FoodDeliveryNavbar from './food delivery/navbar.jsx';
import Footer from './food delivery/footer.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FoodDeliveryLogin />} />
          <Route path="/home" element={<><FoodDeliveryNavbar /><Home /><Footer /></>} />
          <Route path="/:id" element={<><FoodDeliveryNavbar /><FoodOrderInfo /><Footer /></>} />
          <Route path="/table" element={<><FoodDeliveryNavbar /><Table /><Footer /></>} />
          <Route path="/upload" element={<><FoodDeliveryNavbar /><Upload /><Footer /></>} />
          <Route path="/editinfo/:id" element={<><FoodDeliveryNavbar /><EditOrder/><Footer /></>} />
        </Routes>
      </BrowserRouter>
  </StrictMode>
)
