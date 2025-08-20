import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #000; // Black background for luxury feel
  color: #ff69b4; // Pink text color
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #ff69b4; // Pink on hover
    color: #000; // Black text on hover
    transform: scale(1.05); // Slightly enlarge on hover
  }

  &:focus {
    outline: none; // Remove default focus outline
  }
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;