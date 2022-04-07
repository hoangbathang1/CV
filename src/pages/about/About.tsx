
import Information from '../../components/About/Information';
import Lylich from '../../components/About/Lylich';
import Layout from '../../components/Layout/Layout';
import './about.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../action/action';
import Container from 'typedi';
import { LylichService } from '../../service/Lylich.service';
import { GETALLLYLICHDTO } from '../../model/dto/getlylich.dto';
import { useNavigate } from 'react-router-dom'; 
import { useParams } from 'react-router';
import { IpublicInformation } from '../../model/PublicInformation';
import { useEffect, useState } from 'react';
import { ResponseDTO } from '../../model/dto/BaseDto';
import { IRootState } from '../../reducer/CreateRuducer';


const ABout = () => {


  const lylichService = Container.get(LylichService);
  const Dispatch = useDispatch();
  const { id } = useParams();
  const getALLLylichDTO = new GETALLLYLICHDTO({ agentCode: id });
  
  const [informations, setinformation] = useState<IpublicInformation | undefined>();

  const data: IpublicInformation | undefined = useSelector((state: IRootState) => {

    if (state.Information != undefined) {
      return state.Information;
    }
  });
  useEffect(
    () => {
      
      setinformation(data);
    }
    , [data]);
    useEffect(
      
      ()=>{
        lylichService.showlylich(getALLLylichDTO).then((result)=>{
          if(result?.data){
            
            Dispatch(action.showlylich(result?.data));
            
          }
          
        })



      }
    ,[])
    const datalylich: String[] | undefined = useSelector((state: IRootState) => {
    
      if (state.lylich != undefined) {
        return state.lylich;
      }
    });
    
  // console.log(information);
  //  const dispatch = useDispatch();
  //  dispatch(action.showinformation(informations));
  // const information:IpublicInformation|undefined= useSelector((state:IRootState)=>{
  //   return state.Information.Information;
  // })
  // console.log(information);
  return (
    <div>
      
      <div className="page">
        <div className="page_title">
          <h3>Giới Thiệu</h3>
        </div>
        <div className="page_content">
          <div className="about">
            <Information fullname={informations?.fullname} date={informations?.date} email={informations?.email} education={informations?.education} img={informations?.img} location={informations?.location} phone={informations?.phone}></Information>
            {datalylich? <Lylich data1={datalylich}></Lylich> : <div></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ABout;
