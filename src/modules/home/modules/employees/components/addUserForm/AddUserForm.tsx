import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDataTableInfo } from './../../services/get-data-table.service';
import {
  dataTableAction,
  dataTablePagesAction
} from './../../../../../../application/store/employees/actions/Employees.action';
interface IProps {
  sendDataInformation: Function;
  updateDataTable: Function;
}
// Style
import './AddUserForm.scss';
const AddUserForm = (props: IProps) => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    Request: '',
    name: '',
    last_name: '',
    birthday: ''
  });
  const sendData = async () => {
    if (formValue.name === '') {
      alert('Nombre incompleto');
      return;
    }
    if (formValue.last_name === '') {
      alert('Apellido incompleto');
      return;
    }
    if (formValue.birthday === '') {
      alert('Cumpleaños incompleto');
      return;
    }
    await props.sendDataInformation(formValue);
    const data = await getDataTableInfo();
    dispatch(dataTableAction(data.employeesPaginated));
    dispatch(dataTablePagesAction(data.pagesArray));
  };
  return (
    <div className="add-user-form flex">
      <div className="add-user-form__title flex-start-center">
        Añade un nuevo usuario
      </div>
      <div className="add-user-form__input-container">
        <div className="add-user-label">Nombre</div>
        <div className="add-user-input">
          <input
            maxLength={30}
            type="text"
            onChange={(e) =>
              setFormValue({ ...formValue, name: e.target.value })
            }
            className="add-user-input__input"
            placeholder="Luis Diego"
          />
        </div>
      </div>
      <div className="add-user-form__input-container">
        <div className="add-user-label">Apellidos</div>
        <div className="add-user-input">
          <input
            maxLength={30}
            onChange={(e) =>
              setFormValue({ ...formValue, last_name: e.target.value })
            }
            className="add-user-input__input"
            placeholder="Díaz Henández"
          />
        </div>
      </div>
      <div className="add-user-form__input-container">
        <div className="add-user-label">Fecha de nacimiento</div>
        <div className="add-user-input">
          <input
            onChange={(e) =>
              setFormValue({ ...formValue, birthday: e.target.value })
            }
            type="date"
            className="add-user-input__input"
            placeholder="Díaz Henández"
          />
        </div>
      </div>
      <div className="add-user-form__input-container">
        <div className="add-user-label"></div>
        <div className="add-user-input">
          <div
            onClick={() => sendData()}
            className="add-user-input__button flex-center-center">
            Añadir usuario
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
