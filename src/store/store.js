import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { useReducer } from 'react'

const userInitialState = {
    currentUser: null
}

const userReducer = (state = userInitialState, { type, payload }) => {
    return state
}

const productsInitialState = []

const productsReducer = (state = productsInitialState, { type, payload }) => {
    return state
}

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
})

export const store = createStore(rootReducer, undefined)
