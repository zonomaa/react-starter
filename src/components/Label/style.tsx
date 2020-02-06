import styled from '@emotion/styled';

export interface LabelStyleProps {
  color: string;
}

export const LabelStyle = styled.div<LabelStyleProps>`
  font-size: 1rem;
  padding: 1px 4px;
  display: inline-block;
  border-radius: 2px;
  color: ${props => props.color};
`;
