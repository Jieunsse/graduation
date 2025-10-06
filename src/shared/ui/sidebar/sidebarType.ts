import { type JSX } from 'react';

export type SvgIconProps = {
  className?: string;
};

export type MenuItem = {
  label: string;
  Icon: (props: SvgIconProps) => JSX.Element;
  variant?: 'highlight';
  tag?: string;
  path?: string;
};

export type CollapsibleNavItem = {
  label: string;
  Icon: (props: SvgIconProps) => JSX.Element;
  subItems: string[];
};

export type ControlItem = {
  label: string;
  value: string;
  Icon: (props: SvgIconProps) => JSX.Element;
};
