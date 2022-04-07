
import {IpublicInformation} from './PublicInformation';
import {IPublichSkill} from './PublichSkill';
export interface actionInformation {
    type: String|undefined,
    data: IpublicInformation|undefined
}
export interface actionLyLich {
    type: String,
    data: String[]
}
export interface actionSkill{
    type: string,
    data: IPublichSkill
}
export interface actionNangLuc{
    type: string,
    data: String[]
}