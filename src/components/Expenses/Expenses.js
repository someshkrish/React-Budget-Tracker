import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setYear] = useState('2021');

  const filterChangeHandler = (year) => {
    console.log("expenses.js", year);
    setYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={selectedYear} onFilterChange={filterChangeHandler} />
        {props.items.map((el) => (
          <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
