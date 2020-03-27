import React from 'react';
import './MainColumn.scss';

const MainColumn = (props) => (
  <div className='mainColumn'>{props.children}</div>
);

export default MainColumn;
