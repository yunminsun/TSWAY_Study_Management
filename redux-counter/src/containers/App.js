import React, { Component } from 'react';
import ButtonsList from './ButtonsList'
import CounterListContainer from './CounterListContainer';

class App extends Component {
    render() {
        
        return (
            <div className='App'>
                <ButtonsList />
                <CounterListContainer />
            </div>
        );
    }
}


export default App;