interface IUploadActions {
  fileName: string;
  fileSize: number;
  fileLink: string;
}
export const uploadActions = (data: IUploadActions) => {
  return {
    type: 'ADD_IMAGE',
    payload: data
  };
};
