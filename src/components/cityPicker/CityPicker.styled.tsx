import styled from 'styled-components';

export const CityPickerWrapper = styled.div`
  width: 400px;
  height: 60px;
  display: none;
  background-color: #ffcbab;
  border-radius: 25px;
  color: black;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const CitySelect = styled.div<{ left: boolean }>`
  width: 200px;
  height: 60px;

  position: absolute;
  left: ${({ left }) => (left ? '0px' : '200px')};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const CitySelectHighlighter = styled.div<{ left: boolean }>`
  position: absolute;

  width: 200px;
  height: 60px;
  border-top-left-radius: ${({ left }) => (left ? '25px' : '0px')};
  border-bottom-left-radius: ${({ left }) => (left ? '25px' : '0px')};
  border-top-right-radius: ${({ left }) => (left ? '0px' : '25px')};
  border-bottom-right-radius: ${({ left }) => (left ? '0px' : '25px')};

  left: ${({ left }) => (left ? '0px' : ' 200px')};

  background-color: white;
  transition: left 0.5s, border-radius 0.5s;
`;
