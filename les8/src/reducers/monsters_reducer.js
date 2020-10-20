import { LOAD_MONSTERS, CREATE_MONSTER, UPDATE_MONSTER, DELETE_MONSTER, EDIT_MONSTER } from '../actions/index';

const monsters = (monsters = [], action) => {
    let newmonsters = [...monsters];
    switch (action.type) {
        case LOAD_MONSTERS:
            return action.monsters;
        case CREATE_MONSTER:
            return [
                ...newmonsters,
                action.monster
            ];
        case DELETE_MONSTER:
            newmonsters.splice(action.index,1);
            return newmonsters;
        case EDIT_MONSTER:
            newmonsters[action.index].isEditing =  true;
            return newmonsters;
        case UPDATE_MONSTER:
            newmonsters[action.index] = action.monster;
            newmonsters[action.index].isEditing =  false;
            return newmonsters;
        default:
            return newmonsters;
    }
};

export default monsters;
