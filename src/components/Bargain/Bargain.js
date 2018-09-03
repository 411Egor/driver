import React , {Component} from 'react';

import './Bargain.css';
import Car from '../../assets/img/icons/car.svg'
import Arrow from '../../assets/img/arrow.png'
import DriverMenu from '../DriverMenu/DriverMenu'
import Face from '../../assets/img/face.png'
import Pen from '../../assets/img/pen.png'
import Info from '../../assets/img/info.png'
import TimeList from '../../assets/img/time-list.png'
import Case from '../../assets/img/case.png'
import Pet from '../../assets/img/pet.png'
import ProfileMenu from "../ProfileMenu/ProfileMenu";

class Bargain extends Component{

    render(){
        return(

            <React.Fragment>
                <DriverMenu/>
                <div className="bargain">
                    <div className="bg-wp">
                        <div className="more-info">
                            <div className="address">
                                <p>ул. Семашко 10</p>
                                <p>ул. Советская 3</p>
                            </div>
                            <div className="time-wp">
                                <span className="distance">5,2 км</span>
                                <span className="time">12:50</span>
                            </div>
                            <div className="price">
                                16 р
                            </div>
                        </div>
                        <div className="comment">
                            Пожалуйста, не слушайте шансон и уберите все иконы из авто
                        </div>
                        <div className="icons">
                            <img src={Case} alt=""/>
                            <img src={Pet} alt=""/>
                        </div>
                        <div className="trade">
                            <div className="numbers">
                                <button className="minus-active">-1</button>
                                <div className="count">16 р</div>
                                <button className="plus-active">+1</button>
                            </div>
                            <div className="coefficient">
                                <button>x1.15</button>
                                <button>x1.3</button>
                                <button>x1.5</button>
                            </div>
                        </div>

                    </div>
                    <button className="big-btn">Отправить клиенту</button>

                </div>

            </React.Fragment>
        )


    }

}

export default Bargain;