import React from 'react';
import './AppTitle.scss';
interface IAppTitleProps {
  pageTitle: string;
}

const AppTitle = (props: IAppTitleProps) => {
  return <div className="app-title flex-start-center">{props.pageTitle}</div>;
};

export default AppTitle;
