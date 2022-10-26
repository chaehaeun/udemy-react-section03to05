import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpensData }) {
  // 중괄호 없이 onSaveExpensData자체를 함수로 쓰면 에러나기 때문에 props.onSaveExpensData 이런식으로 함수를 호출해야 되고
  // 중괄호에 프롭스를 넣으면 함수 그 자체로 쓸 수 있는데 애초에 프롭스가 객체 형식으로 구조분해할당 되기 때문에 그런 건가??
  // 중괄호 없이 넣으면 그냥 프롭스라는 객체 그 자체를 가리키게 돼서?
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [inputVal, setInputVal] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle((prev) => (prev = e.target.value));
    // setInputVal({
    //   ...inputVal,
    //   title: e.target.value,
    // });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount((prev) => (prev = e.target.value));
    // setInputVal({
    //   ...inputVal,
    //   amount: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate((prev) => (prev = e.target.value));
    // setInputVal((prev) => {
    //   return {
    //     ...prev,
    //     date: e.target.value,
    //   };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpensData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
