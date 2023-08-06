import styled from 'styled-components';

export const BackButtonWrapper = styled.button`
  min-width: 220px;
  height: 60px;
  background-color: white;
  border-radius: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #c1c1c1;
  margin: 40px auto;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  gap: 0.8rem;
  transition: gap .2s ease-in-out;
  &:hover {
    gap: 1.2rem;
  }
`;
