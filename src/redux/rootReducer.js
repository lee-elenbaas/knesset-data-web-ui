import {combineReducers} from "redux";
import {searchReducer} from './reducers/search.reducer';
import {activeDataReducer} from './reducers/data.reducer';
import {connectRouter} from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  activeData: activeDataReducer,
  search: searchReducer
});
