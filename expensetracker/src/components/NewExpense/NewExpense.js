import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpData) =>{ //expect to get expData from the child
        const expData = {
            ...enteredExpData,
            id:Math.random().toString()
        }
        // console.log(expData)
        // to pass the expdata to parent (app.js)
        props.onAddExpense(expData)
    }
    return (
        <div className='new-expense'>
            {/* onSaveExpData is a props pass to child */}
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>  
        </div>
    );
}

export default NewExpense ;