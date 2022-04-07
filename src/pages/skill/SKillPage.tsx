
import React, { useEffect } from 'react'
import NangLuc from '../../components/Skill/NangLuc'
import Skill from '../../components/Skill/Skill'
import './skill.scss';
import Container from 'typedi';
import { SkillService } from '../../service/Skill.service';
import { GETALLSKILLHDTO } from '../../model/dto/getSkill.dto';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {shownangluc, showskill} from '../../action/action';
import { IPublichSkill } from '../../model/PublichSkill';
import { IRootState } from '../../reducer/CreateRuducer';
import {NangLucService} from '../../service/nangluc.service';
import { GETALLNANGLUCDTO } from '../../model/dto/getnangluc.dto';
interface Inangluc{
  data : String[]
}

const SKillPage = () => {
  const Skillservice = Container.get(SkillService);
  const NangLucservice = Container.get(NangLucService);
  const { id,id1 } = useParams();
  const getALLLylichDTO = new GETALLSKILLHDTO({ agentCode: id });
  const getALlNangLucDTO = new GETALLNANGLUCDTO({agentCode: id1});
  const dispatch = useDispatch();
  useEffect(()=>{
    Skillservice.showskill(getALLLylichDTO).then((result)=>{
      if(result.data){
        dispatch(showskill(result.data));
        NangLucservice.shownangluc(getALlNangLucDTO).then((result)=>{
          if(result.data){
            dispatch(shownangluc(result.data));
          }
        })

      }
      
    })


  },[])
  const dataskill: IPublichSkill | undefined = useSelector((state: IRootState) => {
    
    if (state.skill != undefined) {
      return state.skill;
    }
  });
  const datananggluc: Inangluc | undefined = useSelector((state: IRootState) => {
    
    if (state.nangluc != undefined) {
      return {
        data : state.nangluc
      }
    }
  });

  
  return (
    <div className="page">
                    <div className="page_title">
                        <h3>Kỹ Năng và Năng Lực</h3>
                    </div>
                    <div className="page_content">
                        <div className="skill">
                            
                          
                        <Skill CSS={dataskill?.CSS}   HTML={dataskill?.HTML} JAVA={dataskill?.JAVA} JSS={dataskill?.JSS} REACTJS={dataskill?.REACTJS} SQL={dataskill?.SQL}></Skill>
                        
                        </div>
                        {datananggluc?.data?<NangLuc data={datananggluc.data}></NangLuc> : ""  }
                       
                       
    
    
                    </div>
    
    
    
    
    
                </div>

  )
}

export default SKillPage
