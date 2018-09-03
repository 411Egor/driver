import React, { Component } from 'react';
import './App.css';


import Load from "../Load/Load"

import {connect} from 'react-redux'

import changeScreenAction from "../../actions/changeScreenAction";
import RoadMap from "../RoadMap/RoadMap";
import DriverMenu from '../DriverMenu/DriverMenu';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import Step from '../Step/Step';
import DriverRegistration from '../DriverRegistration/DriverRegistration'
import RaceHistory from "../RaceHistory/RaceHistory";
import EnterDriverPin from "../EnterDriverPin/EnterDriverPin";
import DriverProfile from "../DriverProfile/DriverProfile";
import DriverPin from "../DriverPin/DriverPin";
import DriverOrders from "../DriverOrders/DriverOrders";
import ChooseCar from "../ChooseCar/ChooseCar";
import Bargain from "../Bargain/Bargain";
import AboutCar from "../AboutCar/AboutCar";




class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.user.token === null) this.props.dispatch(changeScreenAction(<Step/>));
    }

    render() {
        return this.props.app.currentScreen || <DriverMenu />;
    }
}

const mapStateToProps = (state) => {
    console.log('mapToProps');
    console.log(state);
    return state;
};

    

export default connect(mapStateToProps)(App)
