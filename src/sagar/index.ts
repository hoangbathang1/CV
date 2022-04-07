import {call, put, take, takeEvery,takeLatest,select, all} from 'redux-saga/effects';
import aboutsagar from './about';





function* rootSaga(){

    yield all([
        aboutsagar()
     
    ])
   
}
export default rootSaga;