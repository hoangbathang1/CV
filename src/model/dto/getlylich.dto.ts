
import { DTO, ResponseDTO } from './BaseDto';
import {METHOD} from '../../contants/method';
import { ENDPOINT } from '../../contants/endpoint';
export class GETALLLYLICHRESPONSE extends ResponseDTO{
    constructor(){
        super();
    }
    public readonly data: String[]|undefined
}
interface GETLYLICHQUERY {
    agentCode: string | undefined;
}
export class GETALLLYLICHDTO extends DTO {
    public body= undefined;
    public url=  ENDPOINT.URL
    public param: GETLYLICHQUERY;
    public method= METHOD.GET;
    public readonly response! : GETALLLYLICHRESPONSE;
    constructor(param: GETLYLICHQUERY){
        super();
        this.param=param;
    }


}
