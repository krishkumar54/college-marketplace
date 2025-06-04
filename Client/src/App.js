// ==========================
//  React Frontend Setup – (5 Marks)
// ==========================

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

// Page Components
// These are different screens for authentication, product, and user management
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import UserProfile from "./components/UserProfile";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import LandingPage from "./components/Landing";

// Main App Component
// This defines the client-side routes for navigating through the React app
const App = () => {
  return (
    <AuthProvider> {/*  Global Auth Context for login state */}
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Product Listing & Interaction */}
          <Route path="/home" element={<Home />} />                 {/* View all products */}
          <Route path="/product/:id" element={<ProductPage />} />   {/* View individual product */}
          <Route path="/add-product" element={<AddProduct />} />    {/* Add new product */}
          <Route path="/product/:id/edit" element={<EditProduct />} /> {/* Edit product */}

          {/* User Profile */}
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

/*
- "This is the main App component that defines routing using React Router."
- "Each path maps to a different screen — register, login, product view, add/edit product, and user profile."
- "I’ve wrapped everything inside AuthProvider to manage global login state."
- "This frontend interacts with the Express backend via REST APIs and runs on Docker port 3000."

To Run:
docker compose up

Frontend runs at:
http://localhost:3000
*/
