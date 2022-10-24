import React from 'react';
import EmployeesView from './employees/EmployeesView';
import UploadView from './upload/UploadView';
export const HomeRoutes = [
  {
    path: '/',
    element: <EmployeesView />
  },
  {
    path: 'employees',
    element: <EmployeesView />
  },
  {
    path: 'upload',
    element: <UploadView />
  }
];
