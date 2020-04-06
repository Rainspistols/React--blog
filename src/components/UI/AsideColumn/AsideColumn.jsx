import React from 'react';
import './AsideColumn.scss';

const AsideColumn = ({ children, width }) => (
  <div className='asideColumn' style={{ width: width }}>
    {children}
  </div>
);

export default AsideColumn;
