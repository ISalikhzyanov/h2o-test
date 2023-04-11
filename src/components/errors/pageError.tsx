import React from 'react';
import icon from '../../../src/assets/img/errors/wrench-adjustable-circle-fill.svg'
import {Link} from "react-router-dom";

function PageError() {
    return (
        <div className="page-error">
            <img src={icon} alt="no" width="64" height="64"/>
            <p className="page-error__header">Что-то пошло не так! К сожалению в данный момент страница не  доступна</p>
            <Link className="page-error__link" to="/employee">Перейти к доступной странице</Link>
        </div>
    );
}

export default PageError;
