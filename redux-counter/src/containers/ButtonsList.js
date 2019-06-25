import * as actions from '../actions';
import getRandomColor from '../lib/getRandomColor';
import { connect } from 'react-redux';
import Buttons from '../components/Buttons'

function mapDispatchToProps(dispatch) {
    return {
        onCreate: () => dispatch(actions.create(getRandomColor())),
        onRemove: () => dispatch(actions.remove()),
    };
};
const ButtonsList = connect( null, mapDispatchToProps )(Buttons);
export default ButtonsList;