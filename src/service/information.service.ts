import Container, { Service } from 'typedi';
import { HttpService } from './http.service';
import {GetALLInformationDTO,GetAllInformationResponse} from '../model/dto/getInformation.dto';
import {GETALLINFORREPONSE,UPDATEINFORDTO} from '../model/dto/Updateinfor.dto';
@Service()
export class InformationService {
    private httpServiceInstance = Container.get(HttpService);
    async showinformation(GetallInformationDto: GetALLInformationDTO): Promise<GetAllInformationResponse> {
        return this.httpServiceInstance.request(GetallInformationDto);
    }
    async updateinformation(Updateinfor: UPDATEINFORDTO): Promise<GETALLINFORREPONSE> {
        return this.httpServiceInstance.request(Updateinfor);
    }

}
