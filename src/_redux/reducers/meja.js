const initialState = {
    results: [],
    isLoading: false,
    isError: false
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case 'ALL_MEJAS_PENDING':
            return {...state, isLoading: true}
        case 'ALL_MEJAS_FULFILLED':
            console.log(action.payload.data.data)
            return {...state, isLoading: false, results: action.payload.data.data}
        case 'ALL_MEJAS_REJECTED':
            return {...state, isLoading: true, isError: true}
        default:
            return state
    }
}
