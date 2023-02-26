import styled from "styled-components";


const CityPickerWrapper = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  flex-direction: row;
  background-color: #FFCBAB;
  border-radius: 25px;
`

const CitySelect = styled.div`
  width: 200px;
  height: 60px;

  border-top-left-radius: ${props => props.left ? "25px" : "0px"};
  border-bottom-left-radius: ${props => props.left ? "25px" : "0px"};
  border-top-right-radius: ${props => props.left ? "0px" : "25px"};
  border-bottom-right-radius: ${props => props.left ? "0px" : "25px"};

  background-color: ${props => props.selected ? "white" : "transparent"};

  display: flex;
  justify-content: center;
  align-items: center`;

export const CityPicker = () => <CityPickerWrapper>
    <CitySelect left>Zlin</CitySelect>
    <CitySelect selected>Uherske Hradiste</CitySelect>

</CityPickerWrapper>;