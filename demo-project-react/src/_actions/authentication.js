export function userLogin(requestData) {
    return (dispatch, state) => {
        console.log(state)
        //dispatch(authenticationPending());
        dispatch(authenticationSuccess(requestData));
        //dispatch(authenticationError(error));
    }
}


export function authenticationPending() {
    return {
        type: 'AUTHENTICATION_PENDING'
    }
}

export function authenticationSuccess(data) {
    return {
        type: 'AUTHENTICATION_SUCCESS',
        data: data
    }
}

export function authenticationError(error) {
    return {
        type: 'AUTHENTICATION_ERROR',
        error: error
    }
}
