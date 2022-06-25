import React from 'react';
import SidebarLeft from '../../components/SidebarLeft';
import EmployeeTable from '../../components/EmployeeTable';

const EmployeeList = () => {
    return(
        <div className="inner-wrapper">
            <SidebarLeft />
            <EmployeeTable />
        </div>
    )
}

export default EmployeeList;