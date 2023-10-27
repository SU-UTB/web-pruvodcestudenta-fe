import { Container } from '../shared/containers/Container.styled';
import { LocationMapWrapper } from './LocationMapWrapper.styled';

type Props = {
  location: string;
};

export const LocationMap = ({ location }: Props) => {
  return (
    <Container>
      <LocationMapWrapper>
        <iframe
          src={location}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </LocationMapWrapper>
    </Container>
  );
};
