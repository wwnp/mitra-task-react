import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import mainpage from './mainpage';
import errors from './errors';

export const history = createBrowserHistory();

const reducer = combineReducers({
  mainpage,
  errors,
  router: connectRouter(history),
});

export default reducer;