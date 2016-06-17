import expect from 'expect'
import {ADD_SLOT} from 'constants/ActionTypes';
import * as actions from 'actions'

describe('slot actions', () => {
    it('addTodo should create ADD_SLOT action', () => {
        expect(actions.addSlot('frameworks', 'React / Redux'))
            .toEqual({
                type: ADD_SLOT,
                slot: {
                    column: 'frameworks',
                    name: 'React / Redux'
                }
            })
    })
});