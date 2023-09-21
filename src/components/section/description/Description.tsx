import { IDescription } from '../../../lib/interfaces/IDescription';
import { DescriptionWrapper } from './DescriptionWrapper.styled';

export const Description = ({ description }: IDescription) => {
  return (
    <DescriptionWrapper
      dangerouslySetInnerHTML={{ __html: description ?? '' }}
    />
  );
};
