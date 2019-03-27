
const initialState = {
        check: [],
        success: []
};

let password = "1234";

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'NUMBER':
            console.log(action.value);
            return {...state, check: state.check + action.value};
        case 'SPLICE':
            return {...state,
                check: state.check.substring(0, state.check.length - 1),
                success: ""
            };
        case 'ENTER':
            if(state.check === password) {
                return {...state, success: "Правильно!"}
            } else {
                return {...state, success: "Не правильно!"}
            }
        default:
            return state;
    }
};

export default reducer;