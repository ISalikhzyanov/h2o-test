import React from 'react';
import SearchInput from "./search-intup/SearchInput";
import {useDispatch, useSelector} from "react-redux";
import {isEdit} from "../../redux/actions";

function EmployeeForm() {
    const dispatch = useDispatch()
    const edit = useSelector((state: any) => state.app.edit)
    return (
        <div className="employee__form">
            <div className="employee__contacts">
                <div className="employee__info">
                    <span className="employee__info__number">2345</span>
                    <span className="employee__info__text">Контактов</span>
                </div>
                <SearchInput />
            </div>
            <button className="employee__button" onClick={() => dispatch(isEdit())}>
                {edit ? 'Режим редактирования' : 'Обычный режим'}
            </button>
        </div>
    );
}

export default EmployeeForm;
