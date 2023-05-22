import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Detail from './pages/Detail';
import GuideCategory from './pages/GuideCategory';
import Main from './pages/Main';

// TODO: change the naming of the paths - should be in Czech language
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index path="/" element={<Main />} />
      <Route path="/sections/:id" element={<GuideCategory />} />
      <Route
        path="/sections/:sectionId/detail/:detailId"
        element={<Detail />}
      />
    </RouterRoutes>
  );
};
