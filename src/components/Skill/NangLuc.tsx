import React from 'react'
import './nangluc.scss'
interface Inangluc{
  data : String[]
}
const NangLuc = (props: Inangluc ) => {
  const shownangluc =(data: String[]) =>{
    const s = data.map((item,key)=>{
      return <li key={key}>{item}</li>
    })
    return s;
  }
  return (
    <div className="capacity">
    <div className="capacity-title">
        <h3>Năng Lực</h3>
    </div>
    <div className="capacity-items">
        <ul className="capacity-item">
            {shownangluc(props.data)}
            
        </ul>

    </div>

</div>
  )
}

export default NangLuc
