import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];

  // {} => Where simple javascript code could be evaluated in the JSX
  // title, amount, date are attributes
  // Attributes need not to be always a dynamic value we can also pass hardcoded value as props like title="React Course"
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
