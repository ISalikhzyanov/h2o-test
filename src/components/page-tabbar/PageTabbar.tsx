import React from 'react';
import '../page-tabbar/pageTabbar.scss'
import userPhoto from '../../assets/img/user.svg'
import userMenu from '../../assets/img/user-menu.svg'
import EmployeeNavigation from "../employee-navigation/EmployeeNavigation";

interface IUser {
    name: string,
    post: string,
    photo: string
}

function PageTabbar({component}: any) {
    const user: IUser = {
        name: 'Kristina 🐰',
        post: 'менеджер продаж',
        photo: userPhoto
    }
    return (
        <div className="tabbar">
            <EmployeeNavigation />
            <div className="tabbar__user">
                <div className="tabbar__user-block">
                    <img src={user.photo} alt="user"/>
                    <div className="tabbar__user-info">
                        <span className="tabbar__user-name">{user.name}</span>
                        <span className="tabbar__user-post">{user.post}</span>
                    </div>
                    <img
                        src={userMenu}
                        alt="user-menu"
                        className="tabbar__user-menu"
                    />
                </div>
            </div>
        </div>
    );
}

export default PageTabbar;
