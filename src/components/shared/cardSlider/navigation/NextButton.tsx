import { useSwiper } from 'swiper/react';

import { NextButtonStyled } from './NavButton.styled';

interface NextButtonProps {
  disabled: boolean;
}

const NextButton = ({ disabled }: NextButtonProps) => {
  const swiper = useSwiper();
  return (
    <NextButtonStyled disabled={disabled} onClick={() => swiper.slideNext()}>
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5 9.5L1.5 9.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13.5 1.5L20.5 9.5L13.5 17.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </NextButtonStyled>
  );
};
export default NextButton;
