const defaultState = {
    prevCollection: '',
    collection: 'dictionary',
    name: 'Dictionary',
    docRef: '',
}

const CHANGE_ACTIVE_COLLECTION = 'CHANGE_ACTIVE_COLLECTION'

export const activeCollectionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_COLLECTION:
            return {
                prevCollection: state.collection,
                ...action.payload
            }
        default:
            return state
    }
}

export const changeActiveCollection = (collection) => ({type: CHANGE_ACTIVE_COLLECTION, payload: collection})