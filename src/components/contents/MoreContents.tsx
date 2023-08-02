import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { IContent } from '../../lib/interfaces/IContent';
import { SectionCard } from '../sectionCard/SectionCard';
import { MoreContentsTitle } from './MoreContentsTitle';
import { MoreContentsWrapper } from './MoreContentsWrapper.styled';
import '../../styles/swiper-custom.css';

interface IContentsData<T extends IContent> {
  data: Array<T>;
  canReplace?: boolean;
}

export const MoreContents = ({ data, canReplace }: IContentsData<IContent>) => {
  return (
    <MoreContentsWrapper>
      <MoreContentsTitle title="Další" />
      <Swiper
        spaceBetween={120}
        width={800}
        slidesPerGroup={2}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        centerInsufficientSlides={true}
        loop={true}
      >
        {data.map((c, i) => (
          <SwiperSlide key={i}>
            <SectionCard
              key={i.toString()}
              id={c.id}
              title={c.title}
              prefix={'detail'}
              canReplace={canReplace}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </MoreContentsWrapper>
  );
};
