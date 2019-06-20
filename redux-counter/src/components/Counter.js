import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div className="Counter" style={{background : color}}
        onClick={onIncrement} 
        onContextMenu={(e)=>{ e.preventDefault(); onDecrement();}}
        onDoubleClick={onSetColor} 
        >{number}</div>
    );
};

Counter.defaultProps ={
    number : 0,
    color : 'black',
    onIncrement : () => console.warn('onIncrement not defined'),
    onDecrement : () => console.warn('onDecrement not defined'),
    onSetColor : () => console.warn('onSetColor not defined')
};

Counter.propTypes = {
    number : PropTypes.number, 
    color : PropTypes.string, 
    onIncrement : PropTypes.func, 
    onDecrement : PropTypes.func, 
    onSetColor : PropTypes.func
};

export default Counter;