import { CSSProperties } from 'react';
import { PuffLoader } from 'react-spinners';

const override: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const LoadingSpinner = () => {
  return <PuffLoader color="#ffdec9" cssOverride={override} />;
};

export default LoadingSpinner;
