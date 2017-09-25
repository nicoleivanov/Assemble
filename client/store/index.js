import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import clothing from './clothing'
import outfit from './outfit'
import imageUpload from './imageUpload'

const reducer = combineReducers(
  {
    user, 
    clothing,
    outfit,
    imageUpload
  }
)
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './clothing'
export * from './outfit'
export * from './imageUpload'
