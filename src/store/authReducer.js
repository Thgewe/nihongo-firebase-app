const defaultState = false;

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOG_IN:
            return true
        case LOG_OUT:
            return false
        default:
            return state
    }
}

export const logoutAuthAction = () => ({type: LOG_OUT})
export const loginAuthAction = () => ({type: LOG_IN})