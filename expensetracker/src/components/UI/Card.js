import './Card.css';

// function Card (props){
const Card = (props) => {
    const classes = 'card ' + props.className; 
    // console.log(classes)
    return (
    // <div className="card">
    <div className={classes}>
        {props.children}
    </div>
    );
}

export default Card; 