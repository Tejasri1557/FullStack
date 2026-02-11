export default function Dashboard({ income, expenses }) {
  const balance = income - expenses;

  return <h2>₹{balance}</h2>;
}
