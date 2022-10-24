import { createStore, combineReducers } from 'redux';
import { authReducer } from './auth/reducers/Auth.reducer';
import { uploadReducer } from './upload/reducers/Upload.reducers';
import { employeesReducer } from './employees/reducers/Employees.reducer';
const reducers = combineReducers({
  authReducer,
  uploadReducer,
  employeesReducer
});
export const store = createStore(reducers);
