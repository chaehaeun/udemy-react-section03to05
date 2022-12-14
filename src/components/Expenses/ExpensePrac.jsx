import React, { useState } from "react";
import "./ExpensePrac.css";
import Card from "../UI/Card";
import ExpensesFilter from "../filterExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function ExpensePrac({ expense }) {
  const [filterVal, setFilterVal] = useState("2022");
  const filterChangeHandler = (seletedYear) => {
    setFilterVal((prev) => (prev = seletedYear));
  };

  const filteredExpenses = expense.filter(
    (item) => item.date.getFullYear() === parseInt(filterVal)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterVal={filterVal}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
