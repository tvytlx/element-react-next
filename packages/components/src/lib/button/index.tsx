import * as React from 'react';
import classNames from 'classNames';

interface Props {
  type?: String;
  icon?: string;
  disabled?: Boolean;
  loading?: Boolean;
  round?: Boolean;
  circle?: Boolean;
  plain?: Boolean;
  className?: String;
}

enum ButtonType {
  PRIMARY,
  SUCCESS,
  INFO,
  WARNING,
  DANGER,
}

const Button: React.FC<Props> = (props) => {
  const { icon, disabled, loading, round, circle, plain } = props;
  const className =
    classNames({
      'el-button': true,
      [`el-button--${props.type}`]: !!props.type,
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
    }) || undefined;

  return (
    <button className={className}>
      {loading ? <i className="el-icon-loading"></i> : undefined}
      {icon && !loading ? <i className={icon}></i> : undefined}
      {props.children}
    </button>
  );
};

export default Button;
