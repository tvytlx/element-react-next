import * as React from 'react';
import classNames from 'classNames';

interface Props {}

const Row: React.FC<Props> = (props) => {
  const clsName = classNames('el-row');
  return (
    <div className={clsName}>
      row
      {props.children}
    </div>
  );
};
export default Row;
