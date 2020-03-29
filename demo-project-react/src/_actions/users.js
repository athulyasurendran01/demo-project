export function fetchUsers() {
    return dispatch => {
        //dispatch(fetchUserPending());
        dispatch(fetchUserSuccess());
        //dispatch(fetchUserError(error));       
    }
}


export function fetchUserPending() {
    return {
        type: 'FETCH_USER_PENDING'
    }
}

export function fetchUserSuccess() {
    return {
        type: 'FETCH_USER_SUCCESS'
    }
}

export function fetchUserError(error) {
    return {
        type: 'FETCH_USER_ERROR',
        error: error
    }
}
