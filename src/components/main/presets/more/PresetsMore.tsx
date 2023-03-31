import { Divider } from '../../../Divider.styled';
import { MoreArrowDown } from './MoreArrowDown.styled';
import { MoreText } from './MoreText.styled';
import { MoreWrapper } from './MoreWrapper.styled';

import arrow_down from '../../../../assets/icons/arrow_down.svg';

export const PresetsMore = () => (
  <MoreWrapper>
    <MoreArrowDown src={arrow_down} alt="arrow_down" />
    <Divider height={8} />
    <MoreText>Více</MoreText>
  </MoreWrapper>
);
