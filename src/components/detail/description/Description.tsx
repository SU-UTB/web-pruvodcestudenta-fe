import { IDescription } from '../../../lib/interfaces/IDescription';
import { DescriptionContent, DescriptionWrapper } from './Description.styled';

export const Description = ({ description }: IDescription) => {
  return (
    <DescriptionWrapper>
      <DescriptionContent>{description}</DescriptionContent>
      <DescriptionContent>
        <p>?</p>
        <p>Mapa</p>
        <p>Odkazy</p>
        <p>Video</p>
        <p>Cokoliv</p>
      </DescriptionContent>
    </DescriptionWrapper>
  );
};
