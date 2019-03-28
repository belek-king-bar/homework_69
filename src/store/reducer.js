
const initialState = {
        check: "",
        success: ""
};

let password = "5555";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NUMBER':
            return {...state, check: (state.check + action.value).substring(0, 4)};

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