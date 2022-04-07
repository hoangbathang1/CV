
import { DTO, ResponseDTO } from './BaseDto';
import {METHOD} from '../../contants/method';
import { ENDPOINT } from '../../contants/endpoint';
import {IPublichSkill} from '../PublichSkill';
export class GETALLSKILLRESPONSE extends ResponseDTO{
    constructor(){
        super();
    }
    public readonly data: IPublichSkill|undefined
}
interface GETSKILLQUERY {
    agentCode: string | undefined;
}
export class GETALLSKILLHDTO extends DTO {
    public body= undefined;
    public url=  ENDPOINT.URL
    public param: GETSKILLQUERY;
    public method= METHOD.GET;
    public readonly response! : GETALLSKILLRESPONSE;
    constructor(param: GETSKILLQUERY){
        super();
        this.param=param;
    }


}
