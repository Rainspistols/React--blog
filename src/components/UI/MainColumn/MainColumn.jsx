import React from 'react';
import './MainColumn.scss';

const MainColumn = (props) => (
  <div className='mainColumn' style={{ width: props.width }}>
    {props.children}
  </div>
);

export default MainColumn;
