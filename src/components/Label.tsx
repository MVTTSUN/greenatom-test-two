import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

type LabelProps = PropsWithChildren<{
  htmlFor: string;
}>;

export function Label({ htmlFor, children }: LabelProps) {
  return <LabelStyled htmlFor={htmlFor}>{children}</LabelStyled>;
}

const LabelStyled = styled.label`
  align-self: flex-start;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
`;
