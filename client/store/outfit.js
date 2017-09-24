import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_OUTFIT = 'GET_OUTFIT'

/**
 * INITIAL STATE
 */
const defaultOutfit = []

/**
 * ACTION CREATORS
 */
const getOutfit = outfit => ({type: GET_OUTFIT, outfit})


/**
 * REDUCER
 */
export default function (state = defaultOutfit, action) {
  switch (action.type) {
    case GET_OUTFIT:
      return action.outfit
    default:
      return state
  }
}

/**
 * THUNK CREATORS
 */
export const fetchOutfit = (outfitProps) => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/outfit', outfitProps)
      const outfit = await response.data
      console.log('outfit', outfit)
      dispatch(getOutfit(outfit))
    } catch(e) {
      console.error(e)
    }
  }
}