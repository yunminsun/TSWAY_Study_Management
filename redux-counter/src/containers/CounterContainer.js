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
    return {
        color : state.color,
        number : state.number
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement : () => dispatch(actions.increment()),
        onDecrement : () => dispatch(actions.decrement()),
        onSetColor : () => {
            const color = getRandomColor();
            dispatch(actions.setColor(color));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);