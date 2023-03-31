import { useState } from 'react';

import {
  CityPickerWrapper,
  CitySelect,
  CitySelectHighlighter,
} from './CityPicker.styled';

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
