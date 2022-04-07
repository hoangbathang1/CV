import React, { useState } from 'react'
import './chinhsua.scss';
import { SubmitHandler, useForm } from "react-hook-form";
import Container from 'typedi';
import { InformationService } from '../../service/information.service';
import { useNavigate, useParams } from 'react-router';
import { UPDATEINFORDTO } from '../../model/dto/Updateinfor.dto';
import { useDispatch } from 'react-redux';
import * as action from '../../action/action'
interface infor {
    fullname: String,
    email: String,
    location: String,
    phone: String,
    education: String,
    date: String,
    img: String

}
const ChinhSua = () => {
    let navigator = useNavigate()
    const [informa, setinfor] = useState<infor>();
    const updateinfor = Container.get(InformationService);
    const { id } = useParams();
    const paramsinfo = { agentCode: id };

    const dispatch = useDispatch();

    const { register, handleSubmit, reset } = useForm<infor>();
    const onhandleSubmit: SubmitHandler<infor> = (data) => {
        updateinfor.updateinformation(new UPDATEINFORDTO(paramsinfo, {
            fullname: `${data.fullname}`,
            email: `${data.email}`,
            location: `${data.location}`,
            phone: `${data.phone}`,
            education: `${data.education}`,
            date: `${data.date}`,
            img: `${data.img}`
        })).then((result) => {
            
            if(result.data){
                dispatch(action.showinformation(result.data));
            }
            reset();
            

        })
    }


    return (
        <form onSubmit={handleSubmit(onhandleSubmit)} >
            <div className="item-form">
                <label >fullname</label>
                <input type="text" {...register("fullname")} />
            </div>
            <div className="item-form">
                <label >email</label>
                <input type="text" {...register("email")} />
            </div>
            <div className="item-form">
                <label >location</label>
                <input type="text" {...register("location")} />
            </div>
            <div className="item-form">
                <label >phone</label>
                <input type="text" {...register("phone")} />
            </div>
            <div className="item-form">
                <label >education</label>
                <input type="text" {...register("education")} />
            </div>
            <div className="item-form">
                <label >date</label>
                <input type="text" {...register("date")} />
            </div>
            <div className="item-form">
                <label >IMG</label>
                <input type="text" {...register("img")} />
            </div>
            <input type="submit" className="submit" value="Chỉnh Sửa" />
        </form>

    )
}

export default ChinhSua
