interface IUploadActions {
  fileName: string;
  fileSize: number;
  fileLink: string;
}
interface IActionAuthReducer {
  type: string;
  payload: IUploadActions[];
}
const filesUploaded: Array<IUploadActions[]> = [];
export const uploadReducer = (
  state = filesUploaded,
  action: IActionAuthReducer
) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [...state, action.payload];
    default:
      return state;
  }
};
