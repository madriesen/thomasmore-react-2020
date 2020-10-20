/*
* action types
*/

export const LOAD_MONSTERS = 'LOAD_MONSTERS';
export const CREATE_MONSTER = 'CREATE_MONSTER';
export const EDIT_MONSTER = 'EDIT_MONSTER';
export const UPDATE_MONSTER = 'UPDATE_MONSTER';
export const DELETE_MONSTER = 'DELETE_MONSTER';

/*
 * action creators
 */

export function loadMonsters(monsters) {
    return {type: LOAD_MONSTERS, monsters}
}

export function editMonster(index) {
    return {type: EDIT_MONSTER, index}
}

export function updateMonster(index, monster) {
    return {type: UPDATE_MONSTER, index, monster}
}

export function createMonster(monster) {
    return {type: CREATE_MONSTER, monster}
}

export function deleteMonster(index) {
    return {type: DELETE_MONSTER, index}
}