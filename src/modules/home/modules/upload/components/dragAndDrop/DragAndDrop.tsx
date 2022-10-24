import React from 'react';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../../../../application/store/upload/actions/Upload.actions';
import './DragAndDrop.scss';

const DragAndDrop = () => {
  const dispatch = useDispatch();
  // Drag & drop
  const handleDrag = function (e: DragEvent | any) {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = function (e: DragEvent | any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer === null) return;
    saveFiles(e.dataTransfer.files);
  };
  const saveFiles = (file: FileList) => {
    for (let i = 0; i < file.length; i++) {
      const fileName = file[i].name;
      const fileSize = file[i].size;
      const extension = fileName.substring(fileName.indexOf('.') + 1);

      if (extension === 'png' || extension === 'jpeg' || extension === 'jpg') {
        const reader = new FileReader();
        reader.readAsText(file[i]);
        reader.onload = () => {
          const fileLink = URL.createObjectURL(file[i]);
          const newArray = {
            fileName,
            fileSize,
            fileLink
          };
          dispatch(uploadActions(newArray));
        };
      } else {
        alert('Formato no valido');
      }
    }
  };

  return (
    <div
      className="drag-and-drop"
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}>
      Arrastra tus archivos aqui
    </div>
  );
};

export default DragAndDrop;
