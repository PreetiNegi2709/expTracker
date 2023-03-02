import "./ExpenseItem.css";

// function ExpenseItem(date,title,amount) --- wronge not 3 para

// WE get 1 parameter per component  => 
// 1 parameter = is object that holds all attributes (here Date,title,amount) as properties
// parameter name can be anything = but prefer props(to be clear this is obj which holds all the att for custom comp)
// we get (key,value) pair in props obj
// keys = attribute name (here title,date,amount)
// values = values set in the App.js inside custom comp

function ExpenseItem(props) 

{

    // now expenseData return date obj so to display
    // we have to first convert it to string use :-
    // .toISOString() : build in method conv date obj to string

  return (
    <div className="expense-item">
      {/* <div>{expenseDate}</div> won't display the site will crash as the date is obj have ti conv it to string */}
      <div> { props.date.toISOString() } </div>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> {props.amount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
