import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { IContent } from '../../../lib/interfaces/IContent';
import { SecondaryTitle } from '../../shared/titles/SecondaryTitle.styled';
import { CardSliderWrapperStyled } from './CardSliderWrapper.styled';
import '../../../styles/swiper-custom.css';
import { ContentCard } from '../contentCard/ContentCard';

interface CardSliderProps {
  contentCards: IContent[];
  title: string;
  prefix: string;
  canReplace?: boolean;
}

export const CardSlider = ({ contentCards, title, prefix, canReplace = false }: CardSliderProps) => {
  return (
    <CardSliderWrapperStyled>
      <SecondaryTitle>{title}</SecondaryTitle>
      <Swiper
        spaceBetween={120}
        width={800}
        slidesPerGroup={2}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        centerInsufficientSlides={true}
        loop={true}
      >
        {contentCards.map(({ id, title, color }) => (
          <SwiperSlide key={id}>
            <ContentCard
              id={id}
              title={title}
              prefix={prefix}
              color={color}
              canReplace={canReplace}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CardSliderWrapperStyled>
  );
};
