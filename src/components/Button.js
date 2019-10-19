import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val=== undefined ;
}

const Button = (props) =>{
    return(
        <div className={`button-wrapper ${isOperator(props.val) ? null : "operator"}`}
            onClick={()=>props.onHandleClick(props.val)}>
            <label>{props.val}</label>
        </div>
    );
}

export default Button;