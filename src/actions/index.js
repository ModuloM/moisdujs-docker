import {ADD_SLOT, SLOT_FORM_UPDATE} from "constants/ActionTypes";

export const slotFormChanged = (column, name) => {
    return {
        type: SLOT_FORM_UPDATE,
        slot: {column, name}
    }
};

export const addSlot = (column, name) => {
    return {
        type: ADD_SLOT,
        slot: {column, name}
    }
};