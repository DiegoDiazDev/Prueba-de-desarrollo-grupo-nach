interface ITable {
  id: number;
  birthday: number;
  name: string;
  last_name: string;
}
export const filterDataTable = async (query: string) => {
  const apiUrl = `${process.env.REACT_APP_API_URL}examen/employees/diego_diaz`;
  const { data } = await fetch(apiUrl, {
    method: 'get'
  }).then((response) => response.json());
  const employees = data.employees;
  const result = employees.filter(function (item: ITable) {
    return item.name == query;
  });
  return { employees: [result], pages: [] };
};
