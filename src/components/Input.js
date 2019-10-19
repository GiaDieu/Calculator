import React from 'react';
import './Input.css';

class Input extends React.Component{
    render(){
        return(
            <div className="input-wrapper">
                {this.props.value}
            </div>
        );
    }
}

export default Input;