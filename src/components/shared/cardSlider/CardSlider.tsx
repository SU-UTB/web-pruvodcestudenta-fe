import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IContent } from '../../../lib/interfaces/IContent';
import '../../../styles/swiper-custom.css';
import { ContentCard } from '../contentCard/ContentCard';
import { CardSliderWrapperStyled } from './CardSliderWrapper.styled';
import NextButton from './navigation/NextButton';
import { PrevButton } from './navigation/PrevButton';

interface CardSliderProps {
  contentCards: IContent[];
  prefix: string;
  canReplace?: boolean;
}

const sliderBreakpoints = {
  600: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 60,
  },
};

export const CardSlider = ({
  contentCards,
  prefix,
  canReplace = false,
}: CardSliderProps) => {
  const swiperRef: any = useRef();
  const [reachedStart, setReachedStart] = useState(true);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleSlideChange = () => {
    setReachedStart(swiperRef.current.isBeginning);
    setReachedEnd(swiperRef.current.isEnd);
  };

  return (
    <CardSliderWrapperStyled>
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={10}
        slidesPerView={1}
        slidesPerGroup={1}
        scrollbar={{ draggable: true }}
        onSlideChange={() => handleSlideChange()}
        onReachEnd={() => setReachedEnd(swiperRef.current.isEnd)}
        breakpoints={sliderBreakpoints}
      >
        <PrevButton disabled={reachedStart} />
        {contentCards.map(({ id, title, color }) => (
          <SwiperSlide key={id}>
            <ContentCard
              key={id}
              id={id}
              title={title}
              prefix={prefix}
              color={color}
              canReplace={canReplace}
            />
          </SwiperSlide>
        ))}
        <NextButton disabled={reachedEnd} />
      </Swiper>
    </CardSliderWrapperStyled>
  );
};
