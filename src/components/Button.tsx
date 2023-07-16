import { MouseEventHandler, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

type ButtonProps = PropsWithChildren<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}>;

export function Button({ children, onClick, type }: ButtonProps) {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 10px 25px;
  background-color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
