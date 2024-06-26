import React from 'react';
import classnames from 'classnames';
import { useConfig } from '../context';

export default function VerticalLeftOutlined(props) {
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
        <path d="M17.8525 3.84727H16.353C16.2499 3.84727 16.1655 3.93162 16.1655 4.03471V20.1547C16.1655 20.2578 16.2499 20.3421 16.353 20.3421H17.8525C17.9556 20.3421 18.04 20.2578 18.04 20.1547V4.03471C18.04 3.93162 17.9556 3.84727 17.8525 3.84727ZM5.94995 3.84727V5.54362C5.94995 5.7662 6.04836 5.97473 6.21706 6.11766L13.2274 12.001L6.21706 17.8843C6.04836 18.0272 5.94995 18.2358 5.94995 18.4584V20.1547C5.94995 20.314 6.13505 20.4007 6.25689 20.2976L16.1421 12.001L6.25689 3.70434C6.22973 3.68125 6.19652 3.66643 6.16119 3.66165C6.12587 3.65688 6.08991 3.66233 6.05759 3.67738C6.02527 3.69243 5.99795 3.71644 5.97888 3.74655C5.9598 3.77666 5.94976 3.81162 5.94995 3.84727V3.84727Z"></path>
      </svg>
    </span>
  );
}
