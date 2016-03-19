import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';

import rootReducer from 'redux/modules/rootReducer';
import { DevTools } from 'containers';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./modules/rootReducer', () => (
      store.replaceReducer(require('./modules/rootReducer').default)
    ));
  }

  return store;
}