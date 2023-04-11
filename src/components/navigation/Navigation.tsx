import React from 'react';
import {Link, useLocation} from "react-router-dom";
import logo from '../../assets/img/logo.svg'
import {navigationImages} from "../../variables/NavigationImages";
import '../navigation/navigation.scss'

function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__links-column">
                <Link to="/">
                    <img src={logo} alt="no"/>
                </Link>
                <div className="navigation__icons-column">
                    <Link to="/calendar" className={useLocation().pathname === '/calendar' ? 'navigation__active-link': ''}>
                        <img src={navigationImages.calendar.img} alt="no"/>
                    </Link>
                    <Link to="/some-list" className={useLocation().pathname === '/some-list' ? 'navigation__active-link': ''}>
                        <img src={navigationImages.someList.img} alt="no"/>
                    </Link>
                    <Link to="/box" className={useLocation().pathname === '/box' ? 'navigation__active-link': ''}>
                        <img src={navigationImages.box.img} alt="no"/>
                    </Link>
                    <Link to="/employee" className={useLocation().pathname === '/employee' ? 'navigation__active-link': ''}>
                        <img src={navigationImages.employee.img} alt="no"/>
                    </Link>
                    <Link to="/balance" className={useLocation().pathname === '/balance' ? 'navigation__active-link': ''}>
                        <img src={navigationImages.balance.img} alt="no"/>
                    </Link>
                    <Link to="/diagram" className={useLocation().pathname === '/diagram' ? 'navigation__active-link': ''}>
                        <img src={navigationImages.diagram.img} alt="no"/>
                    </Link>
                    <Link to="/settings" className={useLocation().pathname === '/settings' ? 'navigation__active-link': ''}>
                        <img src={navigationImages.settings.img} alt="no"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
