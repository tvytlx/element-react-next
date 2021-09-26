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

function rowGutterStyle(gutter: Number | undefined) {
  if (!gutter) return;
  return {
    marginLeft: `-${gutter}px`,
    marginRight: `-${gutter}px`,
  };
}

function mergeStyle(children: React.ReactNodeArray) {
  children;
}

const Row: React.FC<Props> = (props) => {
  const clsName = classNames(
    'el-row',
    props.className,
    props.gutter ? 'is-guttered' : undefined
  );

  return (
    <div className={clsName} style={rowGutterStyle(props.gutter)}>
      {props.children}
    </div>
  );
};

export default Row;
