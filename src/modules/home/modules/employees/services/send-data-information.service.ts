interface IUserInformation {
  name: string;
  last_name: string;
  birthday: string;
}
export const sendDataInformation = async (
  userInformation: IUserInformation
) => {
  const apiUrl = `${process.env.REACT_APP_API_URL}examen/employees/diego_diaz`;
  const data = fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(userInformation),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .catch(() => alert('Ha ocurrido un error'));
  return data;
};
