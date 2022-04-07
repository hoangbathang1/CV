import React from 'react'
import avatar from '../../img/thang.png';
import './sidebar.scss';
import {IpublicInformation} from '../../model/PublicInformation';
const SideBar = (props:IpublicInformation) => {
  return (
    <div className="sidebar">
    <div className="avatar">
        <img src={avatar} className="author_avatar" />
    </div>
    <div className="author_content">
        <h3 className="author_name author__content">Bá Thắng</h3>
        <p className="author__content">Vinh university</p>
    </div>
    <div className="author_url">
        <ul className="author_urls">
            <li>{props.location}</li>
            <li>{props.email}</li>
            <li>{props.phone}</li>
        </ul>

    </div>

</div> 


  )
}

export default SideBar
