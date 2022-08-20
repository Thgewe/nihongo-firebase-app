// sdelal i potom otkazalsya, no reshil ostavit na vsyakii sluchai

const defaultState = []

const ADD_NEW_LINES = 'ADD_NEW_LINES'
const ADD_NEW_LINE = 'ADD_NEW_LINE'
const UPDATE_LINE = 'UPDATE_LINE'
const CLEAR_LINES = 'CLEAR_LINES'

export const linesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEW_LINES:
            return [...state, ...action.payload]
        case ADD_NEW_LINE:
            return [...state, action.payload]
        case UPDATE_LINE:
            return [...state.map((line) => {
                if (line.index === action.payload.index) {
                    return action.payload
                }
                return line
            })]
        case CLEAR_LINES:
            return []
        default:
            return state
    }
}

export const addNewLines = (lines) => ({type: ADD_NEW_LINES, payload: lines})
export const addNewLine = (line) => ({type: ADD_NEW_LINE, payload: line})
export const updateLine = (line) => ({type: UPDATE_LINE, payload: line})
export const clearLines = () => ({type: CLEAR_LINES})