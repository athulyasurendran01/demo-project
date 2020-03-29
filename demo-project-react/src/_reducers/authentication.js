const initialState = {
    pending: false,
    data: {
        "username": "hruday@gmail.com",
        "password": 'hruday123'
    },
    error: null,
    isLoggedIn: false
}

const authenticateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_PENDING':
            return {
                ...state,
                pending: true
            }
        case 'AUTHENTICATION_SUCCESS':
            return {
                ...state,
                pending: false,
                data: action.data,
                isLoggedIn: true
            }
        case 'AUTHENTICATION_ERROR':
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default authenticateReducer;