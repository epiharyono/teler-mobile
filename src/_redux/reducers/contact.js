const initialState = {
    results: [],
    isLoading: false,
    isError: false
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case 'ALL_CONTACTS_PENDING':
            return {...state, isLoading: true}    
        case 'ALL_CONTACTS_FULFILLED':
            return {...state, isLoading: false, results: action.payload.data}    
        case 'ALL_CONTACTS_REJECTED':
            return {...state, isLoading: false, isError: true}    
        default:
            return state
    }
}