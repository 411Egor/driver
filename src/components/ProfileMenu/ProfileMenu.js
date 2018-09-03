import React , {Component} from 'react';

import './ProfileMenu.css';
import Back from '../../assets/img/icons/icon3.svg'
class ProfileMenu extends Component{

    render(){
        return(

            <React.Fragment>
                <div className="profile-menu">
                    <div className="off active">
                        <i className="fa fa-power-off" aria-hidden="true"></i>
                    </div>
                    <div className="back">
                        <img src={Back} alt=""/>
                    </div>
                    <div className="status status-active">
                        Поездки
                    </div>
                    <div className="status">
                        Профиль
                    </div>
                </div>
                <div className="touch">
                    Для просмотра и према заказов <br/>нажмите на кнопку "На связи"
                </div>
            </React.Fragment>
        )


    }

}

export default ProfileMenu;