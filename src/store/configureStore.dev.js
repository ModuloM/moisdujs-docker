import {createStore, compose} from 'redux';
import {persistState} from 'redux-devtools';
import rootReducer from 'reducers';
import DevTools from 'containers/DevTools';

const enhancer = compose(
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
);

const INITIAL_STATE = {
    slots: {
        bootstrapping: {
            title: 'Project Bootstrapping',
            slots: ['JSPM', 'Webpack']
        },
        frameworks: {
            title: 'Les 4 fantastiques framework Front',
            slots: ['React / Redux']
        },
        qualityAndPerformances: {
            title: 'Qualité et performances Javascript',
            slots: []
        },
        curiosity: {
            title: 'Le cabinet de curiosité Javascript',
            slots: ['Vue.js']
        }
    }
};

export default function configureStore() {
    const store = createStore(rootReducer, INITIAL_STATE, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default));
    }

    return store;
}