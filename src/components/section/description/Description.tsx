import { IDescription } from '../../../lib/interfaces/IDescription';
import { DescriptionWrapper } from './DescriptionWrapper.styled';

export const Description = ({ description }: IDescription) => {
  return (
    <DescriptionWrapper>
      <p>{description}</p>
    </DescriptionWrapper>
  );
};
