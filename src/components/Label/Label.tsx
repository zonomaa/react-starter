import * as React from 'react';

import { LabelStyle, LabelStyleProps } from './style';

export interface LabelProps extends Partial<LabelStyleProps> {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text, color = '#000' }) => (
  <LabelStyle {...{ color }}>{text}</LabelStyle>
);

export default Label;
