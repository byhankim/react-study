const isLoggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGNIN':
            return !state
    }
}

export default isLoggedReducer