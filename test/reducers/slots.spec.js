import expect from 'expect'
import slots from 'reducers/slots'
import {ADD_SLOT} from 'constants/ActionTypes';

describe('slots reducer', () => {
    it('should handle initial state', () => {
        expect(slots(undefined, {})).toEqual({});
    });

    it('should handle ADD_SLOT', () => {
        expect(slots({
                topic: {
                    title: 'Test Topic',
                    slots: []
                },
                topic2: {
                    title: 'Test Topic 2',
                    slots: []
                }
            }, {
                type: ADD_SLOT,
                slot: {column: 'topic', name: 'Slot Test Topic'}
            })
        ).toEqual({
            topic: {
                title: 'Test Topic',
                slots: ['Slot Test Topic']
            },
            topic2: {
                title: 'Test Topic 2',
                slots: []
            }
        });
    });

    it('should handle unknown actions', () => {
        expect(slots({}, {
                type: '_UNKNOWN_',
                slot: {}
            })
        ).toEqual({});
    });
});