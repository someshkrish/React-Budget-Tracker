import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
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
  
  const addNewExpenseHandler = (newExpense) => {
    console.log(newExpense);
  };

  // {} => Where simple javascript code could be evaluated in the JSX
  // title, amount, date are attributes
  // Attributes need not to be always a dynamic value we can also pass hardcoded value as props like title="React Course"
  //onAddExpense is a custom prop which is used to pass the function to the child as a reference in order to facilitate communication FROM child TO parent, since it is passed as a reference the child is able to call that function.
  return (
    <div>
      <NewExpense onAddExpense={addNewExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
