import {createStore} from 'redux';
import rootReducer from '../reducers';

const INITIAL_STATE = {
    slots: {
        bootstrapping: {
            title: 'Project Bootstrapping',
            slots: []
        },
        frameworks: {
            title: 'Les 4 fantastiques framework Front',
            slots: []
        },
        qualityAndPerformances: {
            title: 'Qualité et performances Javascript',
            slots: []
        },
        curiosity: {
            title: 'Le cabinet de curiosité Javascript',
            slots: []
        }
    }
};

export default function configureStore() {
    return createStore(rootReducer, INITIAL_STATE);
}