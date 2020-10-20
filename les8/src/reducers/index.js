import { combineReducers } from 'redux';

import monsters from './monsters_reducer';

const reducers = combineReducers({
    monsters
});

export default reducers;
