import {call, put, take, takeEvery,takeLatest,select, all,fork} from 'redux-saga/effects';
import * as action from '../action/action';
import {ACTION_GET} from '../contants/action';
import {IpublicInformation} from '../model/PublicInformation';

import Container from 'typedi';
import {InformationService} from '../service/information.service';
import {GetALLInformationDTO} from '../model/dto/getInformation.dto';
// const informationService = Container.get(InformationService);
function* showinformation (){
    // const getALLInformationDTO = new GetALLInformationDTO({agentCode: 'profile'});
    
    try {
        let data :IpublicInformation = {
            "fullname": "Hoàng Bá Thắng",
            "date": "23/06/1999",
            "location": "Nghệ An",
            "education": "Đại Học Vinh",
            "phone": "0855882558",
            "email": "thangcntt2306@gmail.com",
            "img": "thang.png"
          }
        // informationService.showinformation(getALLInformationDTO).then((result)=>{
        //     if(result?.data){
                
        //     data = result?.data;
        //     console.log("aaaa");
        //     }
        //    });
     
    yield put(action.showinformation(data));
   

    } catch (error) {       
    }   
}  

function* showlylich(){
  console.log("a")
    try {
        // const lylich:IpublicLyLich = {
        //     value: [
        //         "Mình tên là Thắng, thực tập sinh WEB DEVELOPPER, hiện nay mình đang là sinh viên năm cuối Trường Đại Học VINH.",
        //         "Trước 30, tôi muốn mở mang kiến thức, học hỏi nhiều nhất có thể và trong thời gian dài, tôi muốn trở thành một nhà lãnh đạo kỹ thuật, người mà tôi có thể truyền cảm hứng cho thế hệ trẻ và huấn luyện họ theo con đường mà họ có đã chọn."
        //       ]
        // }
       
        
   
        // yield put(action.showlylichsuccess(lylich));
    } catch (error) {
        
    }
}
export default function* aboutsagar(){

    yield takeEvery("SHOW_INFORMATION",showinformation);
    yield takeEvery("SHOW_LYLICH",showlylich);
   
}