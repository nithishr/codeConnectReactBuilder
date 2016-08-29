import { combineReducers } from 'redux';
import testPanelReducer from '../controllers/Test/TestPanel/reducer.js';
const reducer = combineReducers({ testPanel: testPanelReducer });
export default reducer;