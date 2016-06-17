import {ADD_SLOT} from 'constants/ActionTypes';

export default function slots(state = {}, action) {
    switch (action.type) {
        case ADD_SLOT:
            const slotToAdd = action.slot;
            const column = state[slotToAdd.column];

            return {
                ...state,
                [slotToAdd.column]: {
                    title: column.title,
                    slots: [... column.slots, slotToAdd.name]
                }
            };

        default:
            return state;
    }
}
