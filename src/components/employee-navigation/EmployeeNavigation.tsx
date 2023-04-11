import React from 'react';
import '../employee-navigation/employeeNavigation.scss'
import prevButton from '../../assets/img/navigation/prev-button.svg'
import nextButton from '../../assets/img/navigation/next-button.svg'
import {useDispatch, useSelector} from "react-redux";
import {changeTableType} from "../../redux/actions";

function EmployeeNavigation() {
    const tableType = useSelector((state: any) => state.app.tableType)
    const dispatch = useDispatch()
    const tableTypes = ['questionnaire_database', 'common_base', 'employee_base', 'calendar']
    function nextType () {
        let type = ''
        const index = tableTypes.indexOf(tableType)
        if (index === tableTypes.length - 1) {
            type = tableTypes[0]
        } else {
            type = tableTypes[index + 1]
        }
        return dispatch(changeTableType(type))
    }
    function prevType () {
        let type = ''
        const index = tableTypes.indexOf(tableType)
        if (index === 0) {
            type = tableTypes[tableTypes.length - 1]
        } else {
            type = tableTypes[index - 1]
        }
        return dispatch(changeTableType(type))
    }
    return (
        <div className="employee-navigation">
            <div className="employee-navigation__btns-group">
                <button onClick={prevType} className="employee-navigation__btn">
                    <img src={prevButton} alt=""/>
                </button>
                <button onClick={nextType}  className="employee-navigation__btn">
                    <img src={nextButton} alt=""/>
                </button>
            </div>
            <div className="employee-navigation__tabbar">
                <span
                    className={tableType === 'questionnaire_database' ? 'employee-navigation__active-tab' : 'employee-navigation__tab'}
                    onClick={() => dispatch(changeTableType('questionnaire_database'))}
                >
                    База анкет сотрудников</span>
                <span
                    className={tableType === 'common_base' ? 'employee-navigation__active-tab' : 'employee-navigation__tab'}
                    onClick={() => dispatch(changeTableType('common_base'))}
                >
                    Общая база сотрудников</span>
                <span
                    className={tableType === 'employee_base' ? 'employee-navigation__active-tab' : 'employee-navigation__tab'}
                    onClick={() => dispatch(changeTableType('employee_base'))}
                >
                    База сотрудников</span>
                <span
                    className={tableType === 'calendar' ? 'employee-navigation__active-tab' : 'employee-navigation__tab'}
                    onClick={() => dispatch(changeTableType('calendar'))}
                >
                    Календарь событий</span>
            </div>
        </div>
    );
}

export default EmployeeNavigation;
