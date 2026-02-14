export default function FraudAlerts() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Fraud Alerts 🚨</h1>

      <div className="bg-red-600 p-6 rounded-xl mb-4">
        Suspicious large transaction detected.
      </div>

      <div className="bg-yellow-500 text-black p-6 rounded-xl">
        Multiple rapid transactions within 2 minutes.
      </div>
    </div>
  );
}
