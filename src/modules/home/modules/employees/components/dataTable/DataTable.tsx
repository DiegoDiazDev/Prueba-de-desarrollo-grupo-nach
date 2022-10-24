import React, { useState } from 'react';
import './DataTable.scss';
interface IDataTable {
  id: number;
  birthday: number;
  name: string;
  last_name: string;
}
interface IProps {
  data: Array<IDataTable[]>;
  pages: Array<number>;
}
const DataTable = (props: IProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="data-table">
      {/* Tabla */}
      <div className="data-table__table">
        <div className="table-header flex-between-center">
          <div className="table-row flex-center-center">Id</div>
          <div className="table-row flex-center-center">Birthday</div>
          <div className="table-row flex-center-center">Name</div>
          <div className="table-row flex-center-center">Last Name</div>
        </div>
        <div className="table-body">
          {props.data[currentPage]?.map((data: IDataTable, key: number) => (
            <div key={key} className="table-row flex-between-center">
              <div className="row flex-center-center">{data.id}</div>
              <div className="row flex-center-center">{data.birthday}</div>
              <div className="row flex-center-center">{data.name}</div>
              <div className="row flex-center-center">{data.last_name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Paginacion */}
      <div className="data-table__paginator flex-center-center">
        {props.pages?.map((data: number, key: number) => (
          <div
            onClick={() => setCurrentPage(data)}
            key={key}
            className="paginator-button flex-center-center">
            {data + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
