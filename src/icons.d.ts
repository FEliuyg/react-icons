import { ComponentType, SVGAttributes, ReactNode } from 'react';

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
export const StepForwardOutlined: Icon;
export const StepBackwardOutlined: Icon;
export const VerticalLeftOutlined: Icon;
