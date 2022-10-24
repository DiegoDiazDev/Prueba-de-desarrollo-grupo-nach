interface IActionEmployeesReducer {
  type: string;
  payload: boolean;
}
interface ITable {
  id: number;
  birthday: number;
  name: string;
  last_name: string;
}
interface IDataTable {
  dataTable: ITable[];
  pages: Array<number>;
}
const dataTable: IDataTable = {
  dataTable: [],
  pages: []
};
export const employeesReducer = (
  state = dataTable,
  action: IActionEmployeesReducer
) => {
  switch (action.type) {
    case 'UPDATE_DATA_TABLE':
      return {
        ...state,
        dataTable: action.payload
      };
    case 'UPDATE_DATA_TABLE_PAGES':
      return {
        ...state,
        pages: action.payload
      };
    default:
      return state;
  }
};
