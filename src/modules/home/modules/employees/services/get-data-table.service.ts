export const getDataTableInfo = async () => {
  const apiUrl = `${process.env.REACT_APP_API_URL}examen/employees/diego_diaz`;
  const { data } = await fetch(apiUrl, {
    method: 'get'
  }).then((response) => response.json());
  const employees = data.employees;
  const employeesPaginated = [];
  const pagesArray = [];
  const pages = 10;
  for (let i = 0; i < employees.length; i += pages) {
    let slice = employees.slice(i, i + pages);
    employeesPaginated.push(slice);
    pagesArray.push(i / pages);
  }
  return { employeesPaginated, pagesArray };
};
