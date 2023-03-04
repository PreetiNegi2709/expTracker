import "./ExpenseForm.css";
import React, {useState} from 'react';

const ExpenseForm = () => {
    // to store the entered title --------------------------------
    const [enterTitle,setEnterTitle]= useState('') //initaly inout is empty
    // to store the entered title --------------------------------
    const [enterAmount,setEnterAmount] = useState('');
    // to store the entered title --------------------------------
    const [enterDate,setEnterDate] = useState('');
    
    const titleChangeHandler = (event) =>{
        console.log(event.target.value);
        // will use state to store the end value and in future it will be useful to change DOM aswell
        setEnterTitle(event.target.value);
    }
    
    const amountChangeHandler = (event) =>{ //event name can be anything
        console.log(event.target.value);
        setEnterAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{ //event name can be anything
        console.log(event.target.value);
        setEnterAmount(event.target.value)
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.1" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
