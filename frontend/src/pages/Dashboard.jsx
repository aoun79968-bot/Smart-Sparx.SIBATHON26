export default function Dashboard() {
  const balance = 25000;
  const income = 40000;
  const expenses = 15000;

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>💰 Smart Sparx Dashboard</h1>

      <div style={card}>
        <h3>Total Balance</h3>
        <p>Rs. {balance}</p>
      </div>

      <div style={card}>
        <h3>Total Income</h3>
        <p style={{ color: "green" }}>Rs. {income}</p>
      </div>

      <div style={card}>
        <h3>Total Expenses</h3>
        <p style={{ color: "red" }}>Rs. {expenses}</p>
      </div>
    </div>
  );
}

const card = {
  border: "1px solid #ccc",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "8px",
  width: "250px"
};
