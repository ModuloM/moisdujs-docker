import {ADD_SLOT, SLOT_FORM_UPDATE} from "constants/ActionTypes";

const initialSate = {
    column: 'bootstrapping',
    name: ''
};

export default function slots(state = initialSate, action) {
    switch (action.type) {
        case SLOT_FORM_UPDATE:
            return action.slot;

        case ADD_SLOT:
            return initialSate;

        default:
            return state;
    }
}
