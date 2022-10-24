import React from 'react';
import { useSelector } from 'react-redux';

import AppTitle from '../../../../application/components/AppTitle/AppTitle';
import DragAndDrop from './components/dragAndDrop/DragAndDrop';
import FilesPreview from './components/filesPreview/FilesPreview';

import './UploadView.scss';
interface IUpload {
  fileName: string;
  fileSize: number;
  fileLink: string;
}
const UploadView = () => {
  const imagesList = useSelector(
    (state: { uploadReducer: IUpload[] }) => state.uploadReducer
  );
  return (
    <div className="upload-view">
      <AppTitle pageTitle="/ Upload" />
      <div className="upload-view__image-container">
        <DragAndDrop />
      </div>
      {imagesList.length > 0 && (
        <div className="upload-view__image-container flex-center-end">
          <div className="upload-btn flex-center-center">
            Subir <br />
            todas las magenes
          </div>
        </div>
      )}
      {imagesList?.map((item: IUpload, key: number) => (
        <div key={key} className="upload-view__image-container">
          <FilesPreview fileName={item.fileName} fileLink={item.fileLink} />
        </div>
      ))}
    </div>
  );
};

export default UploadView;
