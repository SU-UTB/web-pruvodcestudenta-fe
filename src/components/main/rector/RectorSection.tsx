import { RectorImage } from './image/RectorImage';
import { RectorSectionWrapper } from './RectorSectionWrapper.styled';
import { RectorText } from './text/RectorText';

export const RectorSection = () => {
  return (
    <RectorSectionWrapper>
      <RectorImage />
      <RectorText />
    </RectorSectionWrapper>
  );
};
