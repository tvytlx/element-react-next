import * as React from 'react';
import classNames from 'classNames';

interface Props {
  gutter?: Number;
  className?: String;
}

function gutterStyle(gutter: Number | undefined) {
  if (!gutter) return;
  return {
    paddingLeft: `${gutter}px`,
    paddingRight: `${gutter}px`,
  };
}

function rowStyle(gutter: Number | undefined) {
  if (!gutter) return;
  return {
    marginLeft: `-${gutter}px`,
    marginRight: `-${gutter}px`,
  };
}

function compundChildren(
  children: React.ReactNode,
  gutter: Number | undefined
) {
  // children?.valueOf() forEach((child: React.ReactChild) => {
  //   child?.className = 'is-gutter';
  // });
}

const Row: React.FC<Props> = (props) => {
  const clsName = classNames(
    'el-row',
    props.className,
    props.gutter ? 'is-guttered' : undefined
  );
  return (
    <div className={clsName} style={rowStyle(props.gutter)}>
      {props.children}
    </div>
  );
};
export default Row;
