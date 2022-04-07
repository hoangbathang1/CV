import React from 'react'
import { IpublicInformation } from '../../model/PublicInformation'

const Information = (props:IpublicInformation) => {
    return (



            <div className="information">
                <h3>Thông tin</h3>
                <ul className="information-list">
                    <li>Họ tên: {props.fullname}</li>
                    <li>Sinh Ngày: {props.date}</li>
                    <li>Nơi sống: {props.location}</li>
                    <li>Học Vấn: {props.education}</li>
                    <li>Số điện thoại: {props.phone}</li>
                </ul>

            </div>
     
    )
}

export default Information
