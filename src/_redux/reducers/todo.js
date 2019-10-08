const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false
}

export default function todoReducer(state=initialState, action){
    switch (action.type) {
        case 'ALL_TODOS':
            return {...state, results: action.payload}    
        default:
            return state
    }
}