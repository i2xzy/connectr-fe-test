import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  border: 1px solid ${({ theme }) => theme.palette.foreground}66;
  width: 100%;
`;

export const Name = styled.h2`
  padding-top: ${({ theme }) => theme.spacer(3)}px;
  text-align: center;
`;

export const Class = styled.h5`
  padding-bottom: ${({ theme }) => theme.spacer(2)}px;
  text-align: center;
  text-transform: uppercase;
`;

interface CategoryProps {
  isClickable?: boolean;
  isSelected?: boolean;
}

export const Category = styled.div<CategoryProps>`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacer(4)}px;
  grid-template-columns: 1fr auto;
  padding: ${({ theme }) => theme.spacer(2)}px
    ${({ theme }) => theme.spacer(3)}px;

  pointer-events: none;

  ${({ isClickable, theme }) =>
    isClickable &&
    `pointer-events: all;
     &:hover {
      background: ${theme.palette.secondary};
      color: ${theme.palette.primary};
      cursor: pointer;
     }`}

  ${({ isSelected, theme }) =>
    isSelected && `color: ${theme.palette.secondary};`}

  @media screen and (min-width: 600px) {
    padding: ${({ theme }) => theme.spacer(4)}px;
  }
`;

export const CategoryName = styled.span`
  text-transform: uppercase;
`;

export const Value = styled.span`
  text-align: end;
  text-transform: capitalize;
`;
