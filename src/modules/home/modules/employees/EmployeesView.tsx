import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  dataTableAction,
  dataTablePagesAction
} from '../../../../application/store/employees/actions/Employees.action';
// Components
import AppTitle from '../../../../application/components/AppTitle/AppTitle';
import DataTable from './components/dataTable/DataTable';
import AddUserForm from './components/addUserForm/AddUserForm';
import FilterForm from './components/filterForm/FilterForm';
// Services
import { getDataTableInfo } from './services/get-data-table.service';
import { sendDataInformation } from './services/send-data-information.service';
import './EmployeesView.scss';
interface ITable {
  id: number;
  birthday: number;
  name: string;
  last_name: string;
}
const EmployeesView = () => {
  const dispatch = useDispatch();
  const dataTable = useSelector(
    (state: { employeesReducer: { dataTable: Array<ITable[]> } }) =>
      state.employeesReducer.dataTable
  );
  const dataTablePages = useSelector(
    (state: { employeesReducer: { pages: Array<number> } }) =>
      state.employeesReducer.pages
  );
  const getDataOfTable = async () => {
    const data = await getDataTableInfo();
    dispatch(dataTableAction(data.employeesPaginated));
    dispatch(dataTablePagesAction(data.pagesArray));
  };
  useEffect(() => {
    getDataOfTable();
  }, []);
  // --------

  //
  return (
    <div className="page">
      <AppTitle pageTitle="/ Employees" />
      <AddUserForm
        updateDataTable={getDataOfTable}
        sendDataInformation={sendDataInformation}
      />
      <FilterForm />
      <div className="data-table-container">
        <DataTable data={dataTable} pages={dataTablePages} />
      </div>
    </div>
  );
};

export default EmployeesView;
