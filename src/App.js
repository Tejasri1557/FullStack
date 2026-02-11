import "./App.css";
import Dashboard from "./components/Dashboard";
import Income from "./components/Income";
import Expenses from "./components/Expenses";

function App() {
  const income = 50000;
  const expenses = 20000;

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>💰 Finance Tracker</h1>
        <p>Manage your money smartly</p>
      </div>

      {/* Balance */}
      <div className="balance-card">
        <p>Total Balance</p>
        <Dashboard income={income} expenses={expenses} />
      </div>

      {/* Income & Expense */}
      <div className="stats">
        <div className="stat-box income-box">
          <h3>Income</h3>
          <Income amount={income} />
        </div>

        <div className="stat-box expense-box">
          <h3>Expenses</h3>
          <Expenses />
        </div>
      </div>

      {/* Transactions */}
      <div className="transactions">
        <h3>Recent Transactions</h3>

        <div className="transaction">
          <span>Salary</span>
          <span>+ ₹50,000</span>
        </div>

        <div className="transaction">
          <span>Groceries</span>
          <span>- ₹5,000</span>
        </div>

        <div className="transaction">
          <span>Internet Bill</span>
          <span>- ₹1,500</span>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2026 Finance Tracker App</p>
      </div>
    </div>
  );
}

export default App;
