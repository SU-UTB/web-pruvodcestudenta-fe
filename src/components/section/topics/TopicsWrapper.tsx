import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { IContent } from '../../../lib/interfaces/IContent';
import { SectionCard } from '../../sectionCard/SectionCard';
import { SecondaryTitle } from '../../shared/titles/SecondaryTitle.styled';
import { TopicsWrapperStyled } from './TopicsWrapper.styled';
import '../../../styles/swiper-custom.css';

interface TopicsWrapperProps {
  topics: IContent[];
  canReplace?: boolean;
}

export const TopicsWrapper = ({ topics, canReplace = false }: TopicsWrapperProps) => {
  return (
    <TopicsWrapperStyled>
      <SecondaryTitle>Další</SecondaryTitle>
      <Swiper
        spaceBetween={120}
        width={800}
        slidesPerGroup={2}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        centerInsufficientSlides={true}
        loop={true}
      >
        {topics.map(({ id, title, color }) => (
          <SwiperSlide key={id}>
            <SectionCard
              id={id}
              title={title}
              prefix={'detail'}
              color={color}
              canReplace={canReplace}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </TopicsWrapperStyled>
  );
};
