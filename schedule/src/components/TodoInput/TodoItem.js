import React, { Component } from 'react';
import './TodoItem.scss';

//<TodoItem 
//key={todo.id} done={todo.done} onToggle={() => onToggle(todo.id)} onRemove={() => onRemove(todo.id)}>{todo.text}
//</TodoItem>

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.done !== nextProps.done;
    }

    render() {
        const {done, children, onToggle, onRemove } = this.props;
        return (
            <div className='todo-item' onClick={onToggle}>
                <input className='tick' type="checkbox" checked={done} readOnly />
                <div className={done?'text done':'text'}>{children}</div>
                <div className='delete' onClick={(e) =>{
                    onRemove();
                    e.stopPropagation();
                }}>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;