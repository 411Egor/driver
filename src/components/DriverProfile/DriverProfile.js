import React , {Component} from 'react';

import './DriverProfile.css';
import Car from '../../assets/img/icons/car.svg'
import Arrow from '../../assets/img/arrow.png'
import DriverMenu from '../DriverMenu/DriverMenu'
import Face from '../../assets/img/face.png'
import Pen from '../../assets/img/pen.png'
import Info from '../../assets/img/info.png'
import TimeList from '../../assets/img/time-list.png'
import ProfileMenu from "../ProfileMenu/ProfileMenu";

class DriverProfile extends Component{

    render(){
        return(

            <React.Fragment>
                <ProfileMenu/>
                <div className="driver-profile">
                    <div className="driver-profile-wp">
                        <div className="driver-info-wp">
                            <div className="driver-info">
                                <div className="driver-img">
                                    <img src={Face} alt=""/>
                                </div>
                                <div className="col-wp">
                                    <div className="driver-name">Вазген</div>
                                    <div className="driver-phone">+375 29 555 3535</div>
                                    <div className="driver-car">Volkswagen 889</div>
                                </div>

                            </div>
                            <button className="edit">
                                <img src={Pen} alt=""/>
                            </button>
                        </div>
                        <div className="driver-list">
                            <div className="list-name">Выполнено заказов</div>
                            <div className="list-status">102</div>
                        </div>
                        <div className="driver-list">
                            <div className="list-name">Отказов</div>
                            <div className="list-status">0%</div>
                        </div>
                        <div className="driver-list">
                            <div className="list-name">Пробег</div>
                            <div className="list-status">320 км</div>
                        </div>
                        <div className="driver-list">
                            <div className="list-name">Рейтинг</div>
                            <div className="list-status">
                                <i className="fa fa-star fa-active"></i>
                                <i className="fa fa-star fa-active"></i>
                                <i className="fa fa-star fa-active"></i>
                                <i className="fa fa-star fa-active"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex-wp">
                        <div className="info">
                            <button><img src={Info} alt=""/></button>
                        </div>
                        <div className="count">
                            <div className="count-wp">
                                Доход
                                <span>543,5 р</span>
                            </div>
                            <button><img src={Arrow} alt=""/></button>

                        </div>
                    </div>
                    <div className="flex-wp history">
                        <div className="first-img">
                            <img src={TimeList} alt=""/>
                            История отзывов
                        </div>

                        <div className="second-img">
                            <button><img src={Arrow} alt=""/></button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )


    }

}

export default DriverProfile;