import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { Detail } from './pages/Detail';
import Main from './pages/Main';
import { Section } from './pages/Section';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index path="/" element={<Main />} />
      <Route path="/sections/:id" element={<Section />} />
      <Route path="/sections/:section/detail/:detailId" element={<Detail />} />
    </RouterRoutes>
  );
};
