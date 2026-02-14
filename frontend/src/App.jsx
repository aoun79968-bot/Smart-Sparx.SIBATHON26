import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import ExpenseTracker from "./pages/ExpenseTracker";
import FinancialInsights from "./pages/FinancialInsights";
import Savings from "./pages/Savings";
import FraudAlerts from "./pages/FraudAlerts";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Navbar from "./components/Navbar";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/expenses" element={<ExpenseTracker />} />
                    <Route path="/insights" element={<FinancialInsights />} />
                    <Route path="/savings" element={<Savings />} />
                    <Route path="/fraud" element={<FraudAlerts />} />
                  </Routes>
                </>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
