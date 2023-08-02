import { IDescription } from '../../../lib/interfaces/IDescription';
import { Container } from '../../containers/Container.styled';
import { DescriptionContent, DescriptionWrapper } from './Description.styled';

export const Description = ({ description }: IDescription) => {
  return (
    <Container>
      <DescriptionWrapper>
        <DescriptionContent>{description}</DescriptionContent>
      </DescriptionWrapper>
    </Container>
  );
};
