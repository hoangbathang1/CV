import Container, { Service } from 'typedi';
import { HttpService } from './http.service';
import {GETALLLYLICHRESPONSE,GETALLLYLICHDTO} from '../model/dto/getlylich.dto'
@Service()
export class LylichService {
    private httpServiceInstance = Container.get(HttpService);
    async showlylich(GetALLLILICHDTO: GETALLLYLICHDTO): Promise<GETALLLYLICHRESPONSE> {
        return this.httpServiceInstance.request(GetALLLILICHDTO);
    }

}

