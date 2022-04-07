import {combineReducers} from 'redux';
import Information from './information';
import lylich from './Lylich';
import skill from './Skill';
import nangluc from './Nangluc';
const reducers = combineReducers({
    Information,
    lylich,
    skill,
    nangluc
    

})
export default  reducers;
export type IRootState = ReturnType<typeof reducers>;