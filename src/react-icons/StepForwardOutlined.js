import React from 'react';
import classnames from 'classnames';
import { useConfig } from '../context';

export default function StepForwardOutlined(props) {
  const { color, size, className, style = {}, ...otherProps } = props;
  const config = useConfig();
  const { cls } = config || {};

  return (
    <span
      className={classnames('easyv-icon', cls, className)}
      style={{ color, fontSize: size, ...style }}
      {...otherProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M15.8531 12.3973L6.87188 19.4524C6.53789 19.7149 6.04688 19.4782 6.04688 19.0552V4.94461C6.04688 4.52156 6.53789 4.28508 6.87188 4.54758L15.8531 11.6027C15.9134 11.6499 15.9621 11.7102 15.9957 11.7791C16.0292 11.8479 16.0466 11.9234 16.0466 12C16.0466 12.0766 16.0292 12.1521 15.9957 12.2209C15.9621 12.2898 15.9134 12.3501 15.8531 12.3973ZM16.2656 20.25H17.7656C17.8154 20.25 17.863 20.2302 17.8982 20.1951C17.9334 20.1599 17.9531 20.1122 17.9531 20.0625V3.9375C17.9531 3.88777 17.9334 3.84008 17.8982 3.80492C17.863 3.76975 17.8154 3.75 17.7656 3.75H16.2656C16.2159 3.75 16.1682 3.76975 16.133 3.80492C16.0979 3.84008 16.0781 3.88777 16.0781 3.9375V20.0625C16.0781 20.1122 16.0979 20.1599 16.133 20.1951C16.1682 20.2302 16.2159 20.25 16.2656 20.25Z"></path>
      </svg>
    </span>
  );
}
