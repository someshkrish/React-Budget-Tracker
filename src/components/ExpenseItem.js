import ExpenseDate from './ExpenseDate';
import Card from './Card';

import './ExpenseItem.css';

function ExpenseItem(props) {
    // {} => basic javascript functions could be evaluated here
    // props => All the attributes in the App.js is passed as a single object which is called as props or properties
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;