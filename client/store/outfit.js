import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_OUTFIT = 'GET_OUTFIT'
const CLEAR_OUTFIT = 'CLEAR_OUTFIT'

/**
 * INITIAL STATE
 */
const defaultOutfit = {}

/**
 * ACTION CREATORS
 */
const getOutfit = outfit => ({type: GET_OUTFIT, outfit})

export function clearOutfit() {
  return {type: CLEAR_OUTFIT}
}

/**
 * REDUCER
 */
export default function (state = defaultOutfit, action) {
  switch (action.type) {
    case GET_OUTFIT:
      return action.outfit
    case CLEAR_OUTFIT:
      return {}
    default:
      return state
  }
}

/**
 * THUNK CREATORS
 */
export const fetchOutfit = (outfitProps, history) => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/outfit', outfitProps)
      const outfit = await response.data
      console.log('outfit', outfit)
      dispatch(getOutfit(outfit))
      history.push('/assembledOutfit')
    } catch(e) {
      console.error(e)
    }
  }
}