import './Card.css';

// composition components meaning using components inside components
// Whenever we combine components it is called composition
// important feature is props.children
function Card(props){
    const classes = `card ${props.className}`;
    return(
        <div className={classes}>{props.children}</div>
    );
};

export default Card;