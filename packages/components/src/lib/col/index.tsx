import * as React from 'react';
import classNames from 'classNames';

interface Props {
  span?: Number;
  offset?: Number;
  push?: Number;
  pull?: Number;
}

const Col: React.FC<Props> = (props: Props) => {
  const className =
    classNames({
      'el-col': props.span,
      [`el-col-${props.span}`]: props.span,
    }) || undefined;

  return <div className={className}>col</div>;
};

export default Col;
