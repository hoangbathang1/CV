import Container, { Service } from 'typedi';
import { HttpService } from './http.service';
import {GETALLNANGLUCDTO,GETNANGLUCRESPONSE} from '../model/dto/getnangluc.dto'
@Service()
export class NangLucService {
    private httpServiceInstance = Container.get(HttpService);
    async shownangluc(GetALLSKILLDTO: GETALLNANGLUCDTO): Promise<GETNANGLUCRESPONSE> {
        return this.httpServiceInstance.request(GetALLSKILLDTO);
    }

}

