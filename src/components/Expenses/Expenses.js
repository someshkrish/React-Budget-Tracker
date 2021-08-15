import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setYear] = useState("2021");

  const filterChangeHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.items.filter(
    (el) => el.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={selectedYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
