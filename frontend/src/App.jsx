import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import ExpenseTracker from "./pages/ExpenseTracker";
import FinancialInsights from "./pages/FinancialInsights";
import Savings from "./pages/Savings";
import FraudAlerts from "./pages/FraudAlerts";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/expenses" element={<ExpenseTracker />} />
          <Route path="/insights" element={<FinancialInsights />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/fraud" element={<FraudAlerts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
