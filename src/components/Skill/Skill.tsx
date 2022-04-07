import React from 'react'
import { IPublichSkill } from '../../model/PublichSkill'
import './skill.scss'
const Skill = (props : IPublichSkill) => {
 
  return (
<div className="head-skill">
               
               <h3>Kỹ Năng của tôi</h3>
                <div className="skill-box">
                    <div className="skill-item">
                       <p>JAVA</p>
                       <progress max="100" value= {`${props.JAVA}`}></progress>
                      
                   </div>
                   <div className="skill-item">
                       <p>HTML</p>
                       <progress max="100" value={`${props.HTML}`}></progress>
                       
                   </div>
                   <div className="skill-item">
                       <p>CSS</p>
                       <progress max="100" value={`${props.CSS}`}></progress>
                       
                   </div>
                   <div className="skill-item">
                       <p>JSS</p>
                       <progress max="100" value={`${props.JSS}`}></progress>
                       
                   </div>
                   <div className="skill-item">
                       <p>SQL</p>
                       <progress max="100" value={`${props.SQL}`}></progress>
                       
                   </div>
                   <div className="skill-item">
                       <p>REACTJS</p>
                       <progress max="100" value={`${props.REACTJS}`}></progress>
                       
                   </div>  
                   
   
   
                </div>  
   
           </div>
  )
}

export default Skill
