import React , {Component} from 'react';

import './DriverOrders.css';
import Step from '../Step/Step'
import DriverMenu from '../DriverMenu/DriverMenu'

class DriverOrders extends Component{

    render(){
        return(

            <React.Fragment>
                <DriverMenu/>
                <div className="order-items-wp">
                    <div className="order-item">
                        <div className="flex-wp">
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
                        <div className="buttons-wp">
                            <button className="accept">Принять заказ</button>
                            <button className="torg">Торг</button>
                        </div>
                    </div>
                </div>
                <div className="order-items-wp">
                    <div className="order-item">
                        <div className="flex-wp">
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
                    <div className="buttons-wp">
                        <button className="accept">Принять заказ</button>
                        <button className="torg">Торг</button>
                    </div>
                    </div>
                </div>
                <div className="order-items-wp">
                    <div className="order-item">
                        <div className="flex-wp">
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
                        <div className="buttons-wp">
                            <button className="accept">Принять заказ</button>
                            <button className="torg">Торг</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )


    }

}

export default DriverOrders;