import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [toBeRendered, setToBeRendered] = useState(false);
  
  const displayHandler = () => {
    setToBeRendered((prevState) => !prevState);
  };

  const newExpenseHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    displayHandler();
  };

  //onNewExpense is a custom prop which is used to pass the function to the child as a reference in order to facilitate communication between child and parent, since it is passed as a reference the child is able to call that function.
  return (
    <div className="new-expense">
      {!toBeRendered && <button onClick={displayHandler}>Add New Expense</button>}
      {toBeRendered && <ExpenseForm onNewExpense={newExpenseHandler} onReset={displayHandler}/>}
    </div>
  );
};

export default NewExpense;
