import * as React from 'react';
import classNames from 'classNames';

interface Props {
  span?: Number;
  offset?: Number;
  push?: Number;
  pull?: Number;
  className?: string;
}

const Col: React.FC<Props> = (props) => {
  const className =
    classNames({
      'el-col': props.span,
      [`el-col-${props.span}`]: props.span,
      [props.className || '']: !!props.className,
    }) || undefined;

  return <div className={className}>{props.children}</div>;
};

export default Col;
