import {ACTION_GET} from '../contants/action';

import {actionLyLich, actionNangLuc} from '../model/Action';
import { IPublichSkill } from '../model/PublichSkill';
import {Lylich} from '../model/Reducer';
const nangluc = (state:String[] =[], action:actionNangLuc) => {
    switch (action.type) {
        case ACTION_GET.SHOW_NANGLUC:
            
            state = action.data;
        
            return state;
        default:
            return state;

    }

}
export default nangluc;