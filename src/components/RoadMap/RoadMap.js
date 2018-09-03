import React , {Component} from 'react';

import './RoadMap.css';
import Step from '../Step/Step'
import Car from '../../assets/img/icons/car.svg'
import DriverMenu from '../DriverMenu/DriverMenu'

class RoadMap extends Component{

    render(){
        return(

            <React.Fragment>
                <DriverMenu/>
                <div className="road-map">
                    <div className="map">
                        <span className="plus"><i className="fa fa-plus" aria-hidden="true"></i></span>
                        <span className="minus"><i className="fa fa-minus" aria-hidden="true"></i></span>
                    </div>
                    <button className="big-btn active">Действия</button>
                <div className="more-info">
                    <div className="close">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className="wp">
                        <img src={Car} alt=""/>
                        <div className="distance">10 км</div>
                        <div className="time">8 мин</div>
                    </div>

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
                    <div className="actions">
                        <p>Действия</p>
                        <button className="start">Начать поездку</button>
                        <button className="del">Отказался</button>
                        <button className="call">Позвонить клиенту</button>
                        <div className="close">Закрыть</div>
                    </div>
                </div>

            </React.Fragment>
        )


    }

}

export default RoadMap;