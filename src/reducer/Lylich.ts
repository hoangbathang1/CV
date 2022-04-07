import {ACTION_GET} from '../contants/action';

import {actionLyLich} from '../model/Action';
import {Lylich} from '../model/Reducer';
const lylich = (state:String[] =[], action:actionLyLich) => {
    switch (action.type) {
        case ACTION_GET.SHOW_LYLICH:
            
            state = action.data
            return state;
        default:
            return state;

    }

}
export default lylich;