import "./ExpenseForm.css";
import React, {useState} from 'react';

const ExpenseForm = (props) => {
    const [enterTitle,setEnterTitle]= useState('') 
    const [enterAmount,setEnterAmount] = useState('');
    const [enterDate,setEnterDate] = useState('');
    
    // or can use 1 state instead of 3 (to avoid repetition)

    // const [userInput,setUserInput] = useState({
    //     enterTitle:'',
    //     enterAmount:'',
    //     enterDate:''
    // })
    
    const titleChangeHandler = (event) =>{
        setEnterTitle(event.target.value)
        // setUserInput((prevSate)=>{
        //     return {...prevSate, enterTitle: event.target.value}
        // })
    }
    
    const amountChangeHandler = (event) =>{
        setEnterAmount(event.target.value)
        // setUserInput((prevSate)=>{
        //     return {...prevSate, enterAmount: event.target.value}
        // })
    }
    
    const dateChangeHandler = (event) =>{ 
        setEnterDate(event.target.value)
        // setUserInput((prevSate)=>{
        //     return {...prevSate, enterDate: event.target.value}
        // })
    }

    const submitForm = (event)=>{
      event.preventDefault(); //by default jb submit hotan h to pg reload ho jata h use hatane ke leye
      const expenseData = {
        title:enterTitle,
        amount:enterAmount,
        date: new Date(enterDate)
      }
      // console.log(expenseData);

      // we have to add these data to the App.js : pass expenseData to app component/app.js
      //call onSaveEcpdata explicitly.
      props.onSaveExpenseData(expenseData); //expenseData is called enteredExpData in parent comp(newexp)

      // after the input data is stored in expenseData reset the input to inital
      setEnterTitle('');
      setEnterAmount('');
      setEnterDate('');
    }

  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enterAmount} min="0.1" step="0.1" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enterDate} min="2022-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
