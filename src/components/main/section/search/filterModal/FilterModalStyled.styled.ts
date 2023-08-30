import styled from 'styled-components';

export const FilterModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalHeader = styled.div``;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 300px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 500px;
  }
  padding: 1rem;
  border-radius 47px;
  border: 0.5px solid #c1c1c1;
  box-shadow: 0px 0px 16px -2px rgba(161, 161, 161, 0.3);
  background: white;
  z-index: 30;
`;
