import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CLOTHING = 'GET_CLOTHING'

/**
 * INITIAL STATE
 */
const defaultClothing = []

/**
 * ACTION CREATORS
 */
const getClothing = clothing => ({type: GET_CLOTHING, clothing})


/**
 * REDUCER
 */
export default function (state = defaultClothing, action) {
  switch (action.type) {
    case GET_CLOTHING:
      return action.clothing
    default:
      return state
  }
}

/**
 * THUNK CREATORS
 */
export const fetchAllClothing = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/clothing')
      const clothing = await response.data
      dispatch(getClothing(clothing))
    } catch(e) {
      console.error(e)
    }
  }
}

