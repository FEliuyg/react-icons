import React from 'react';
import classnames from 'classnames';
import { useConfig } from '../context';

export default function StepBackwardOutlined(props) {
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
        <path d="M8.14688 12.3973L17.1281 19.4524C17.4621 19.7149 17.9531 19.4782 17.9531 19.0552V4.94461C17.9531 4.52156 17.4621 4.28508 17.1281 4.54758L8.14688 11.6027C8.08661 11.6499 8.03787 11.7102 8.00435 11.7791C7.97083 11.8479 7.95341 11.9234 7.95341 12C7.95341 12.0766 7.97083 12.1521 8.00435 12.2209C8.03787 12.2898 8.08661 12.3501 8.14688 12.3973ZM7.73438 20.25H6.23438C6.18465 20.25 6.13696 20.2302 6.10179 20.1951C6.06663 20.1599 6.04688 20.1122 6.04688 20.0625V3.9375C6.04688 3.88777 6.06663 3.84008 6.10179 3.80492C6.13696 3.76975 6.18465 3.75 6.23438 3.75H7.73438C7.7841 3.75 7.83179 3.76975 7.86696 3.80492C7.90212 3.84008 7.92188 3.88777 7.92188 3.9375V20.0625C7.92188 20.1122 7.90212 20.1599 7.86696 20.1951C7.83179 20.2302 7.7841 20.25 7.73438 20.25Z"></path>
      </svg>
    </span>
  );
}
