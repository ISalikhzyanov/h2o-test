import React from 'react';
import '../errors/errors.scss'
import stop from '../../../src/assets/img/errors/sign-stop.svg'
import {useDispatch} from "react-redux";
import {changeTableType} from "../../redux/actions";

function TableError() {
    const dispatch = useDispatch()
    return (
        <div className="table-error">
            <img src={stop} alt="no" width="64" height="64"/>
            <p className="table-error__header">Что-то пошло не так! К сожалению в данный момент ведутся работы с данной таблицей</p>
            <span onClick={() => dispatch(changeTableType('common_base'))} className="table-error__link">Перейти к доступной таблице</span>
        </div>
    );
}

export default TableError;
