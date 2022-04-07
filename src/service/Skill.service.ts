import Container, { Service } from 'typedi';
import { HttpService } from './http.service';
import {GETALLSKILLRESPONSE,GETALLSKILLHDTO} from '../model/dto/getSkill.dto'
@Service()
export class SkillService {
    private httpServiceInstance = Container.get(HttpService);
    async showskill(GetALLSKILLDTO: GETALLSKILLHDTO): Promise<GETALLSKILLRESPONSE> {
        return this.httpServiceInstance.request(GetALLSKILLDTO);
    }

}

