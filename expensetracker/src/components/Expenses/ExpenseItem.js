import "./ExpenseItem.css";
import ExpenseDate from'./ExpenseDate'
import Card from '../UI/Card'
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  // useState(props.title);
  const [title, setTitle] = useState(props.title)

  const clickHandle = () => {
    // console.log("button is clicked")
    setTitle("updated title")
  }

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick={clickHandle}>click me</button>
    </Card>
  );
}

export default ExpenseItem;
