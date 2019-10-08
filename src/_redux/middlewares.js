import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
import {createLogger} from 'redux-logger'
import {applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
)

const middlewares = applyMiddleware(
    navMiddleware,
    createLogger(),
    promiseMiddleware()
)

export default middlewares