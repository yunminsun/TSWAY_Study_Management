import React from 'react';
import './TodoInput.scss';

// <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>

const TodoInput = ({onChange, onInsert, value}) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            onInsert();
        }
    }
    return (
        <div className='todo-input'>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
            <div className='add-button' onClick={onInsert}>추가</div>
        </div>
    )
}

export default TodoInput;