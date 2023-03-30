import { useNavigate } from 'react-router-dom';

import { BackButtonWrapper } from './BackButtonWrapper.styled';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <BackButtonWrapper onClick={() => navigate(-1)}>Zpět</BackButtonWrapper>
  );
};
