import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducerCombiner';

const IS_DEV = process.env.NODE_ENV === 'development';
const basename = process.env.APP_NAME || '/';

const hasDevTools = () => {
  const isWindowAnObject = (typeof window === 'object');
  const isDevToolsDefined = (typeof window.devToolsExtension !== 'undefined');

  return (isWindowAnObject && isDevToolsDefined);
};

const devToolsEnhancer = hasDevTools() ? window.devToolsExtension() : f => f;

const browserHistory = createBrowserHistory({ basename });

export default function configureStore() {
  const middleware = applyMiddleware(routerMiddleware(browserHistory));

  const enhancer = compose(
    middleware,
    ...IS_DEV ? [devToolsEnhancer] : []);

  const store = createStore(
    connectRouter(browserHistory)(rootReducer),
    enhancer);

  return {
    ...store,
    browserHistory,
  };
}
