import {ACTION_GET} from '../contants/action';

import {actionLyLich, actionSkill} from '../model/Action';
import { IPublichSkill } from '../model/PublichSkill';
import {Lylich} from '../model/Reducer';
const skill = (state:IPublichSkill ={
    "JAVA": '',
    "HTML": '',
    "CSS": '',
    "JSS": '',
    "SQL": '',
    "REACTJS": ''
    
}, action:actionSkill) => {
    switch (action.type) {
        case ACTION_GET.SHOW_SKILL:
            
            state = action.data;
            
            return state;
        default:
            return state;

    }

}
export default skill;