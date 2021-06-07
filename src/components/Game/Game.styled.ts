import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  height: 100vh;
  padding: ${({ theme }) => theme.spacer(6)}px;
  padding-bottom: ${({ theme }) => theme.spacer(8)}px;
  background: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.foreground};
  font-weight: 500;

  @media screen and (min-width: 600px) {
    align-content: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spacer(4)}px;
  width: 100%;
  max-width: 620px;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 300px;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacer(4)}px;
  align-items: center;
  justify-items: center;
  padding: ${({ theme }) => theme.spacer(3)}px;
  border: 1px solid ${({ theme }) => theme.palette.foreground}66;
`;

export const Header = styled(Box)`
  grid-template-columns: auto auto;
  width: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 600px) {
    grid-column: span 2;
  }
`;

export const Heading = styled.h1`
  grid-column: span 2;
  text-align: center;
`;

export const Round = styled.span`
  grid-column: span 2;
`;

export const Message = styled(Box)`
  width: 100%;
  grid-row: span 2;
  text-transform: uppercase;

  @media screen and (min-width: 600px) {
    grid-row: unset;
    grid-column: span 2;
  }
`;

export const Text = styled.span``;

export const Button = styled.button`
  background: unset;
  padding: ${({ theme }) => theme.spacer(3)}px;
  color: ${({ theme }) => theme.palette.foreground};
  border: 1px solid ${({ theme }) => theme.palette.foreground};
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.palette.secondary};
    border: 1px solid ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.primary};
    cursor: pointer;
  }
`;
