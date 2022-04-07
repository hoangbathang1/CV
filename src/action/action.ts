import {ACTION_GET} from '../contants/action';
import { IPublichSkill } from '../model/PublichSkill';
import {IpublicInformation} from '../model/PublicInformation';


export const showinformation = (data :IpublicInformation)=>{
    return {
        type : ACTION_GET.SHOW_INFORMATION,     
        data
    }
};


export const showlylich =(data: String[]) =>{
    return {
        type : ACTION_GET.SHOW_LYLICH, 
        data
    }
}



export const showskill =(data: IPublichSkill)=>{
   
    return {
        type:ACTION_GET.SHOW_SKILL,
        data


    }
}
export const shownangluc =(data: String[])=>{
    return {
        type:ACTION_GET.SHOW_NANGLUC,
        data


    }
}




