const defaultState = true;

const SHOW_NUMBER = 'SHOW_NUMBER'
const HIDE_NUMBER = 'HIDE_NUMBER'

export const showNumberReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_NUMBER':
            return true
        case 'HIDE_NUMBER':
            return false
        default:
            return state
    }
}
export const showNumber = () => ({type: SHOW_NUMBER})
export const hideNumber = () => ({type: HIDE_NUMBER})
