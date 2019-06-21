import * as types from '../actions/ActionTypes';

const initialState ={
    counters : [
        {
            color : 'black',
            number : 0
        }
    ]
};

function counter(state = initialState, action) {

    const { counters } = state;
    switch ( action.type ) {
        case types.INCREMENT:
            return {
                counters : [
                    {
                        ...counters[action.index],
                        number : counters[action.index].number + 1
                    }
                ]
                
                // ...state,
                // number : state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                number : state.number - 1
            };
        case types.SET_COLOR:
            return {
                ...state,
                color : action.color
            };
        default :
            return state;
    }
};

// const counter = (state = initialState, action) => {
//     switch ( action.type ) {
//         case types.INCREMENT:
//             return {
//                 ...state,
//                 number : state.number + 1
//             };
//         case types.DECREMENT:
//             return {
//                 ...state,
//                 number : state.number - 1
//             };
//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color : action.color
//             };
//         default :
//             return state;
//     }
// };

export default counter;