const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
const GET_DATA_FAIL = 'GET_DATA_FAIL'

const initialState = {
    data: [],
    error: ''
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return { ...state }

        case GET_DATA_SUCCESS:
            return { ...state, data: action.payload, error: '' }

        case GET_DATA_FAIL:
            return { ...state, data: action.payload.message }

        default:
            return state
    }
}