import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../action/action';
import Container from 'typedi';
import {InformationService} from '../../service/information.service';
import {GetALLInformationDTO} from '../../model/dto/getInformation.dto';
import {useNavigate} from 'react-router-dom';
import {  useParams } from 'react-router';
import {IpublicInformation} from '../../model/PublicInformation';
import { useEffect, useState } from 'react';
import {IRootState} from '../../reducer/CreateRuducer';
const Layout = () => {
  const navigate = useNavigate();

  const informationService = Container.get(InformationService);
  // const match  = {params: useParams()};
  // const { id } = useParams(); 
  const [data,setdata] = useState<IpublicInformation>();
 
  const getALLInformationDTO = new GetALLInformationDTO({agentCode: 'profile'});
  


  // const dispatch = useDispatch();

  useEffect(   ()=>{
    informationService.showinformation(getALLInformationDTO).then((result)=>{
      if(result?.data){
      // dispatch(action.showinformation(result?.data));
      setdata(result.data);


     
      }
     });
  },[]);
  
  // const data: IpublicInformation | undefined = useSelector((state: IRootState) => {

  //   if (state.Information != undefined) {
  //     return state.Information;
  //   }
  // });
  
 
  return (
    <div> 
      

      <Header></Header>
      <SideBar fullname={data?.fullname} date={data?.date} email={data?.email} education={data?.education}  img={data?.img} location={data?.location} phone={data?.phone} ></SideBar>
    </div>
  )
}

export default Layout
