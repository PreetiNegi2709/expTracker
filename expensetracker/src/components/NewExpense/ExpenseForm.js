import "./ExpenseForm.css";
import React, {useState} from 'react';

const ExpenseForm = () => {
    // const [enterTitle,setEnterTitle]= useState('') 
    // const [enterAmount,setEnterAmount] = useState('');
    // const [enterDate,setEnterDate] = useState('');
    
    // or can use 1 state instead of 3 (to avoid repetition)

    const [userInput,setUserInput] = useState({
        enterTitle:'',
        enterAmount:'',
        enterDate:''
    })
    
    const titleChangeHandler = (event) =>{
        // setEnterTitle(event.target.value)
        setUserInput((prevSate)=>{
            return {...prevSate, enterTitle: event.target.value}
        })
    }
    
    const amountChangeHandler = (event) =>{
        // setEnterAmount(event.target.value)
        setUserInput((prevSate)=>{
            return {...prevSate, enterAmount: event.target.value}
        })
    }
    
    const dateChangeHandler = (event) =>{ 
        // setEnterDate(event.target.value)
        setUserInput((prevSate)=>{
            return {...prevSate, enterDate: event.target.value}
        })
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
