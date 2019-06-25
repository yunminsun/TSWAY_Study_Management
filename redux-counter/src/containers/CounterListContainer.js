import CounterList from '../components/CounterList';
import getRandomColor from '../lib/getRandomColor';

import * as actions from '../actions';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    console.log(state);
    return { counters: state.counters };
};

function mapDispatchToProps(dispatch) {
    return {
        onIncrement : (index) => dispatch(actions.increment(index)),
        onDecrement : (index) => dispatch(actions.decrement(index)),
        onSetColor : (index) => {
            const color = getRandomColor();
            dispatch(actions.setColor({index, color}));
        }
    };
};
const CounterListContainer = connect( mapStateToProps, mapDispatchToProps )(CounterList);
export default CounterListContainer;