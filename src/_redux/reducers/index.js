import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {combineReducers} from 'redux';

import AppNavigator from '../../_navigators';

import todo from './todo'
import contact from './contact'
import channel from './channel'
import order from './order'
import meja from './meja'

const navReducer = createNavigationReducer(AppNavigator);
const reducers = combineReducers({
    nav: navReducer,
    todo,
    contact,
    channel,
    order,
    meja,
});

export default reducers
