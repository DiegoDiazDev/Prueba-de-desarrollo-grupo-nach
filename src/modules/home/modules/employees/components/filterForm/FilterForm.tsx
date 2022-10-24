import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  dataTableAction,
  dataTablePagesAction
} from './../../../../../../application/store/employees/actions/Employees.action';
import { filterDataTable } from '../../services/filter-data-table.service';
import './filter-form.scss';
const FilterForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const filterData = async () => {
    if (search === '') {
      alert('Completa el campo de busqueda');
      return;
    }
    const data = await filterDataTable(search);
    dispatch(dataTableAction(data.employees));
    dispatch(dataTablePagesAction(data.pages));
  };
  return (
    <div className="filter-form flex-start-center">
      <div className="filter-form__input-container">
        <div className="add-user-label">Realiza una busqueda</div>
        <div className="add-user-input">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="add-user-input__input"
            placeholder="Luis Diego"
          />
        </div>
      </div>
      <div className="filter-form__input-container">
        <div className="add-user-label"></div>
        <div className="add-user-input__button">
          <div
            onClick={filterData}
            className="add-user-input__button flex-center-center">
            Buscar
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
