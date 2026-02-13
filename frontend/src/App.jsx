// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import ExpenseTracker from "./pages/ExpenseTracker";
import FinancialInsights from "./pages/FinancialInsights";
import Savings from "./pages/Savings";
import FraudAlerts from "./pages/FraudAlerts";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Main Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/expenses" element={<ExpenseTracker />} />
          <Route path="/insights" element={<FinancialInsights />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/alerts" element={<FraudAlerts />} />

          {/* Fallback for unknown routes */}
          <Route path="*" element={<h1 className="text-center mt-20 text-2xl font-bold">404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

