import {Service} from 'typedi';
import axios from 'axios';
import {ENDPOINT} from '../contants/endpoint';
import { DTO, ResponseDTO } from '../model/dto/BaseDto';
import {STATUS_CODE} from '../contants/statuscode';
@Service()
export class HttpService {
    public active : undefined |string
    constructor(){
        
        

    }
    public request = async (data: DTO): Promise<ResponseDTO> => {
        try {
            const response = await axios({
                
                method: data.method,
                url: `${data.url}${data.param?.agentCode}`,
                data: data.body
            });
          
            return { data: response.data, status: STATUS_CODE.SUCCESS };
        } catch (errorResponse: any) {
            return { data: undefined, status: errorResponse.data.status };
        }
    };
}