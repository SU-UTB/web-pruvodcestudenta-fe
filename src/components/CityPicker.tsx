import styled from 'styled-components';
import { useState } from 'react';

const CityPickerWrapper = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  background-color: #ffcbab;
  border-radius: 25px;
  color: black;
  position: relative;
`;

const CitySelect = styled.div<{ left: boolean }>`
  width: 200px;
  height: 60px;

  position: absolute;
  left: ${(props) => (props.left ? '0px' : '200px')};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const CitySelectHighlighter = styled.div<{ left: boolean }>`
  position: absolute;

  width: 200px;
  height: 60px;
  border-top-left-radius: ${(props) => (props.left ? '25px' : '0px')};
  border-bottom-left-radius: ${(props) => (props.left ? '25px' : '0px')};
  border-top-right-radius: ${(props) => (props.left ? '0px' : '25px')};
  border-bottom-right-radius: ${(props) => (props.left ? '0px' : '25px')};

  left: ${(props) => (props.left ? '0px' : ' 200px')};

  background-color: white;
  transition: left 0.5s, border-radius 0.5s;
`;

enum Cities {
  zlin = 'Zlín',
  uh = 'Uherské Hradiště',
}

export const CityPicker = () => {
  const [selected, setSelected] = useState(Cities.zlin);

  return (
    <CityPickerWrapper>
      <CitySelectHighlighter left={selected === Cities.zlin} />
      <CitySelect onClick={() => setSelected(Cities.zlin)} left={true}>
        {Cities.zlin}
      </CitySelect>
      <CitySelect onClick={() => setSelected(Cities.uh)} left={false}>
        {Cities.uh}
      </CitySelect>
    </CityPickerWrapper>
  );
};
