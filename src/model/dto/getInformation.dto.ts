import { DTO, ResponseDTO } from './BaseDto';
import { METHOD } from '../../contants/method';
import { ENDPOINT } from '../../contants/endpoint';
import { IpublicInformation } from '../PublicInformation';

export interface IGETInformationQuery {
    agentCode: string | undefined;

}

export class GetAllInformationResponse extends ResponseDTO {
    constructor() {
        super();
    }
    public readonly data:  IpublicInformation | undefined;
}

export class GetALLInformationDTO extends DTO {
   
    public param: IGETInformationQuery;
    public url = ENDPOINT.URL;
    public method = METHOD.GET;
    public readonly response!: GetAllInformationResponse;
    public body: undefined;     
    constructor(param: IGETInformationQuery) {
        super();
        this.param = param;
    }
}