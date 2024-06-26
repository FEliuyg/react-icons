export const getAttrs = (iconType: string) => {
  const filledAttrs = {
    fill: 'currentColor',
  };

  const coloredAttrs = {
    fill: 'none',
  };

  return iconType === 'filled' || iconType === 'outlined' ? filledAttrs : coloredAttrs;
};

export const getElementCode = (componentName: string, attrs: string, svgCode: string) => `
  import React from 'react';
  import classnames from 'classnames';
  import { useConfig } from '../context';

  export default function ${componentName} (props) {
    const { color, size, className, style = {}, ...otherProps } = props;
    const config = useConfig();
    const { cls } = config || {}
    
    return (
      <span className={classnames('easyv-icon', cls, className)} style={{ color, fontSize: size, ...style}} {...otherProps}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ${attrs}>
          ${svgCode}
        </svg>
      </span>
    )
  };
`;

export const initialTypeDefinitions = `import { ComponentType, SVGAttributes, ReactNode } from 'react';

interface ConfigProviderProps {
  cls?: string;
  children: ReactNode;
}

export const ConfigProvider: ComponentType<ConfigProviderProps>;

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;
`;

export const initialContextCode = `import './index.css';
export * from './context.js';
`;
