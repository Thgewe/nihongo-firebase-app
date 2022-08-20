const defaultState = [
    {
        collection: 'dictionary',
        name: 'Dictionary',
        docRef: '',
    },
];

const ADD_COLLECTION = 'ADD_COLLECTION';
const RENAME_COLLECTION = 'RENAME_COLLECTION';
const CLEAR_COLLECTIONS = 'CLEAR_COLLECTIONS';

export const firebaseCollectionsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COLLECTION:
            const newArr = [];
            state.forEach((collection) => {
                if (action.payload.data.collection === collection?.collection) {

                } else {
                    newArr.push(collection)
                }
            })
            newArr.push({...action.payload.data, docRef: action.payload.docRef})
            return [...newArr]
        case RENAME_COLLECTION:
            return [...state.map((collection) => {
                    if (collection?.collection === action.payload.collection)
                        return {
                            collection: collection.collection,
                            name: action.payload.name,
                            docRef: collection.docRef,
                        }
                    return collection
                })
            ]
        case CLEAR_COLLECTIONS:
            return [
                {
                    collection: 'dictionary',
                    name: 'Dictionary',
                    docRef: '',
                }
            ]
        default:
            return state
    }
}

export const addCollection = (collection) => ({type: ADD_COLLECTION, payload: collection})
export const renameCollection = (collection) => ({type: RENAME_COLLECTION, payload: collection})
export const clearCollections = () => ({type: CLEAR_COLLECTIONS})