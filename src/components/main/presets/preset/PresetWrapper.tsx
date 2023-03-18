import styled from "styled-components";
import orange from "../../../../assets/images/tables/orange.svg"

export const PresetWrapper = styled.div`
  width: 258px;
  height: 258px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: #FFDEC9 url(${orange}) no-repeat center;
  filter: drop-shadow(-3px -3px 15px rgba(221, 171, 139, 0.5));
`