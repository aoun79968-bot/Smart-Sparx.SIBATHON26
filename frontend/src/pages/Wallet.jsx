import { useState } from "react";

export default function Wallet() {
  const [balance, setBalance] = useState(15000);
  const [amount, setAmount] = useState("");

  const addMoney = () => {
    if (!amount) return;
    setBalance(balance + parseFloat(amount));
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Digital Wallet</h1>

      <div className="bg-gray-800 p-6 rounded-xl mb-6">
        <h2 className="text-lg">Current Balance</h2>
        <p className="text-4xl font-bold mt-2">PKR {balance}</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl">
        <h2 className="mb-4">Add Balance</h2>
        <input
          type="number"
          className="p-2 rounded bg-gray-700 mr-2"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={addMoney}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
