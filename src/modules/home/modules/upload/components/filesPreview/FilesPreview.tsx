import React from 'react';

import './FilesPreview.scss';
interface IProps {
  fileName: string;
  fileLink: string;
}
const FilesPreview = (props: IProps) => {
  return (
    <div className="files-preview">
      <div className="files-preview__image flex-center-center">
        <img src={props.fileLink} alt={props.fileName} className="image" />
      </div>
      <span className="files-preview__file-name flex-center-center">
        {props.fileName}
      </span>
    </div>
  );
};

export default FilesPreview;
