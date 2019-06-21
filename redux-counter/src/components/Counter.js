import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';
// number, color, 
const Counter = ({counters, index,  onIncrement, onDecrement, onSetColor}) => {
    const counterList = counters.map(
        (i) => (
            <div className="Counter" style={{background : counters[index].color}} key={i} index={i}
            onClick={() => onIncrement(index)} 
            onContextMenu={(e)=>{ e.preventDefault(); onDecrement(index);}}
            onDoubleClick={() => onSetColor(index)} 
            >{counters[index].number}</div>
        )
    );
    
    return (
        <div>{counterList}</div>
    );
};

Counter.defaultProps ={
    counters : [],
    number : 0,
    color : 'black',
    index : 0,
    onIncrement : () => console.warn('onIncrement not defined'),
    onDecrement : () => console.warn('onDecrement not defined'),
    onSetColor : () => console.warn('onSetColor not defined')
};

Counter.propTypes = {
    counters : PropTypes.arrayOf(PropTypes.shape({color : PropTypes.string, number : PropTypes.number})),
    number : PropTypes.number, 
    color : PropTypes.string, 
    onIncrement : PropTypes.func, 
    onDecrement : PropTypes.func, 
    onSetColor : PropTypes.func
};

export default Counter;