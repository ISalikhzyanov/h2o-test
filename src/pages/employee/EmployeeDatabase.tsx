import React from 'react';
import '../employee/employee.scss'
import EmployeeForm from "../../components/UI/EmployeeForm";
import Table from '../../components/UI/Table'
import {useSelector} from "react-redux";
import TableError from "../../components/errors/tableError";

function EmployeeDatabase() {
    const tableType = useSelector((state: any) => state.app.tableType)

    function getTable () {
        if (tableType === 'common_base') {
            return <Table />
        } else {
            return <TableError />
        }
    }
    const getHeader = () => {
        switch (tableType){
            case 'common_base':
                return 'Общая база сотрудников'
            case 'questionnaire_database':
                return 'База анкет сотрудников'
            case 'employee_base':
                return 'База сотрудников'
            case 'calendar':
                return 'Кадендарь событий'
        }
    }
    return (
        <div className="employee">
            <h2>{getHeader()}</h2>
            {tableType === 'common_base' && <EmployeeForm />}
            {getTable()}
        </div>
    );
}

export default EmployeeDatabase;
