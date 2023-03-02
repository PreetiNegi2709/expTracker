import "./ExpenseItem.css";

function ExpenseItem(props) {
    // props.date.toISOString() = will convert date object to string (2020-08-13T18:30:00.000Z)
    // .toLocaleString() method returns a string with a language-sensitive (eng) representation of date

  const month = props.date.toLocaleString('en-US',{month:'long'}) ;
  const date = props.date.toLocaleString('en-US',{day:'2-digit'}) ;
  const year = props.date.getFullYear() ;

  return (
    <div className="expense-item">
      <div> 
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> {props.amount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
