import {applyMiddleware, createStore,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagar/index';
import reducers from '../reducer/CreateRuducer';
import thunk from 'redux-thunk';

const configguration = ()=>{
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers,applyMiddleware(thunk),
  
);




return store; 
}
export default configguration;