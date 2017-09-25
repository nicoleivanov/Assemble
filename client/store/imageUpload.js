import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADD_CLOTHING_ITEM = 'ADD_CLOTHING_ITEM'

/**
 * INITIAL STATE
 */
const defaultClothingItem = {}

/**
 * ACTION CREATORS
 */
export function addClothingItem(item) {
  return {type: ADD_CLOTHING_ITEM, item}
} 

/**
 * REDUCER
 */
export default function (state = defaultClothingItem, action) {
  switch (action.type) {
    case ADD_CLOTHING_ITEM:
      return action.item
    default:
      return state
  }
}

/**
 * THUNK CREATORS
 */
export const addItem = (item, history) => {

  return async dispatch => {
    try {
      const response = await axios.post('/api/imageUpload', item)
      const clothing = await response.data
      console.log('clothing', clothing)
      dispatch(addClothingItem(clothing))
      history.push('/imageUpload')
    } catch(e) {
      console.error(e)
    }
  }
}