
import { DTO, ResponseDTO } from './BaseDto';
import {METHOD} from '../../contants/method';
import { ENDPOINT } from '../../contants/endpoint';
import {IPublichSkill} from '../PublichSkill';
import { IpublicInformation } from '../PublicInformation';
export class GETALLINFORREPONSE extends ResponseDTO{
    constructor(){
        super();
    }
    public readonly data: IpublicInformation|undefined
}
interface UPDATEINFORQUERY {
    agentCode: string | undefined;
}

export class UPDATEINFORDTO extends DTO {
    public body:IpublicInformation;
    public url=  ENDPOINT.URL
    public param: UPDATEINFORQUERY;
    public method= METHOD.PUT;
    public readonly response! : GETALLINFORREPONSE;
    constructor(param: UPDATEINFORQUERY,infor :IpublicInformation){
        super();
        this.param=param;
        this.body= infor;
    }


}
