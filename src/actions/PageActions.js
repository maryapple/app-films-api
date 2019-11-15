const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
const GET_DATA_FAIL = 'GET_DATA_FAIL'

const getData = () => {
    return dispatch => {
        dispatch({
            type: GET_DATA_REQUEST
        })

        fetch('https://ghibliapi.herokuapp.com/films?limit=3')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_DATA_SUCCESS,
                    payload: data
                })
            })
            .catch (error => {
                dispatch({
                    type: GET_DATA_FAIL,
                    payload: error
                })
                
            })
    }
}

export default getData