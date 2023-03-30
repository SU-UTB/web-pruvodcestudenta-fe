import styled from 'styled-components';

export const Divider = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;
`;
