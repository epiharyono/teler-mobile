const initialState = {
    menus: [],
    data: {},
    isLoading: false,
    isError: false
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case 'ALL_ORDERS_PENDING':
            return {...state, isLoading: true}
        case 'ALL_ORDERS_FULFILLED':
            console.log('Log Order Reducer : ',action.payload.data.data)
            return {
              ...state,
              isLoading: false,
              menus: action.payload.data.data.daftar_menu,
              data: action.payload.data.data
            }
        case 'ALL_ORDERS_REJECTED':
            return {...state, isLoading: true, isError: true}
        default:
            return state
    }
}
