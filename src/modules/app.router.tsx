import React from 'react';
import { createHashRouter } from 'react-router-dom';
// Layouts
import HomeLayout from './home/HomeLayout';
import LoginLayout from './login/LoginLayout';

// Routes
import { HomeRoutes } from './home/modules/Home.router';

export const appRouter = createHashRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: HomeRoutes
  },
  {
    path: '/login',
    index: true,
    element: <LoginLayout />
  },
  {
    path: '/*',
    index: true,
    element: <LoginLayout />
  }
]);
