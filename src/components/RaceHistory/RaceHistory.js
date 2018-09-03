import React , {Component} from 'react';

import './RaceHistory.css';
import Car from '../../assets/img/icons/car.svg'
import Arrow from '../../assets/img/arrow.png'
import DriverMenu from '../DriverMenu/DriverMenu'
import ProfileMenu from "../ProfileMenu/ProfileMenu";

class RaceHistory extends Component{

    render(){
        return(

            <React.Fragment>
                <ProfileMenu/>
                <div className="race-history">
                    <div className="item">
                        <div className="income">
                            Доход <span>320,8 р</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="finish-race">
                            <div className="time">
                                18:30
                                <span>ул. Притыцкого</span>
                            </div>
                            <div className="count">
                                21 р
                            </div>
                            <div className="arrow">
                                <button><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="finish-race">
                            <div className="time">
                                18:30
                                <span>ул. Притыцкого</span>
                            </div>
                            <div className="count del">
                                Отменен
                            </div>
                            <div className="arrow">
                                <button><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="finish-race">
                            <div className="time">
                                18:30
                                <span>ул. Притыцкого</span>
                            </div>
                            <div className="count">
                                21 р
                            </div>
                            <div className="arrow">
                                <button><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </div>


                </div>



            </React.Fragment>
        )


    }

}

export default RaceHistory;