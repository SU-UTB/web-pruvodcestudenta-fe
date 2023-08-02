import { useNavigate } from 'react-router-dom';

import { BackButtonWrapper } from './BackButtonWrapper.styled';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <BackButtonWrapper title="Zpět" onClick={() => navigate(-1)}>
      Zpět
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 9L21 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 17L2 9L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </BackButtonWrapper>
  );
};
