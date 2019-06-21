import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';


export function getRandomColor(){
    const colors = [
        '#FF0000',
        '#FF5E00',
        '#FFE400',
        '#ABF200',
        '#1DDB16',
        '#0054FF',
        '#00D8FF',
        '#0100FF',
        '#5F00FF',
        '#FF00DD',
        '#FF007F',
        '#000000',
        '#EAEAEA'
    ];

    const random = Math.floor(Math.random() * 13);
    
    return colors[random];
}

function mapStateToProps(state) {
    console.log(state);
    return {
        counters : state.counters,
        color : state.counters[0].color,
        number : state.counters[0].number
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement : (index) => dispatch(actions.increment(index)),
        onDecrement : (index) => dispatch(actions.decrement(index)),
        onSetColor : (index) => {
            const color = getRandomColor();
            dispatch(actions.setColor(index, color));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);