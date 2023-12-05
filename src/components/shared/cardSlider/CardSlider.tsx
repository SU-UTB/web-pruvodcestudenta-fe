import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import { IContent } from '../../../lib/interfaces/IContent';
import '../../../styles/swiper-custom.css';
import { ContentCard } from '../contentCard/ContentCard';
import { CardSliderWrapperStyled } from './CardSliderWrapper.styled';
import NextButton from './navigation/NextButton';
import { PrevButton } from './navigation/PrevButton';

interface CardSliderProps {
  contentCards?: IContent[];
  canReplace?: boolean;
  sectionColor?: string;
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
  canReplace = false,
  sectionColor,
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
        {contentCards?.map(({ slug, title, image, icon }) => (
          <SwiperSlide key={uuidv4()}>
            <ContentCard
              slug={slug}
              title={title}
              color={sectionColor}
              canReplace={canReplace}
              image={image}
              icon={icon}
            />
          </SwiperSlide>
        ))}
        <NextButton disabled={reachedEnd} />
      </Swiper>
    </CardSliderWrapperStyled>
  );
};
