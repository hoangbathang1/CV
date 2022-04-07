import {ACTION_GET} from '../contants/action';
import {IpublicInformation} from '../model/PublicInformation';
import {actionInformation} from '../model/Action';
import {information} from '../model/Reducer';
import { Reducer } from 'redux';

const Information  = (state:IpublicInformation|undefined ={
    fullname: '',
    date: '',
    location: '',
    education: '',
    phone: '',
    email: '',
    img: ''
  }, action:actionInformation) => {
    switch (action.type) {
        case ACTION_GET.SHOW_INFORMATION:
            state = action.data
            
            return state;
        default:
            return state;

    }

}
export default Information;