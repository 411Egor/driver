import React , {Component} from 'react';

import './DriverMenu.css';
import Step from '../Step/Step'
import Face from '../../assets/img/face.png'
import Dots from '../../assets/img/dots.svg'
class DriverMenu extends Component{

    render(){
        return(

            <React.Fragment>
                <div className="profile-menu">
                    <div className="driver-photo">
                        <img src={Face} alt=""/>
                    </div>
                    <div className="off active">
                        <i className="fa fa-power-off" aria-hidden="true"></i>
                    </div>
                    <div className="status status-active">
                        Заказы
                    </div>
                    <div className="dots">
                        <img src={Dots} alt=""/>
                    </div>
                </div>
                <div className="touch">
                    Для просмотра и према заказов <br/>нажмите на кнопку "На связи"
                </div>
            </React.Fragment>
        )


    }

}

export default DriverMenu;