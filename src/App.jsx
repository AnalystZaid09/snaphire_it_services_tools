// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Amazon from "./pages/Amazon";
import Flipkart from "./pages/Flipkart";
import StockMovement from "./pages/StockMovement";
import POReconciliation from "./pages/POReconciliation";
import LeakageReconciliation from "./pages/LeakageReconciliation";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="amazon" element={<Amazon />} />
        <Route path="flipkart" element={<Flipkart />} />
        <Route path="stock-movement" element={<StockMovement />} />
        <Route path="po-reconciliation" element={<POReconciliation />} />
        <Route path="leakage-reconciliation" element={<LeakageReconciliation />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
