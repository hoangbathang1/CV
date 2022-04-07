
import { DTO, ResponseDTO } from './BaseDto';
import {METHOD} from '../../contants/method';
import { ENDPOINT } from '../../contants/endpoint';
export class GETNANGLUCRESPONSE extends ResponseDTO{
    constructor(){
        super();
    }
    public readonly data: String[]|undefined
}
interface GETNANGLUCQUERY {
    agentCode: string | undefined;
}
export class GETALLNANGLUCDTO extends DTO {
    public body= undefined;
    public url=  ENDPOINT.URL
    public param: GETNANGLUCQUERY;
    public method= METHOD.GET;
    public readonly response! : GETNANGLUCRESPONSE;
    constructor(param: GETNANGLUCQUERY){
        super();
        this.param=param;
    }


}
