import { TOGGLE_DRAWER } from './actionTypes';

export function toggleDrawer(showed) {
    return {type: TOGGLE_DRAWER, showed}
}