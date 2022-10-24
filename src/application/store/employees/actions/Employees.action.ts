interface IDataTable {
  fileName: string;
  fileSize: number;
  fileLink: string;
}
export const dataTableAction = (data: Array<IDataTable[]>) => {
  return {
    type: 'UPDATE_DATA_TABLE',
    payload: data
  };
};
export const dataTablePagesAction = (data: any) => {
  return {
    type: 'UPDATE_DATA_TABLE_PAGES',
    payload: data
  };
};
