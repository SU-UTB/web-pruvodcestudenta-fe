import { Route, Routes as RouterRoutes } from 'react-router-dom';

import GuideCategory from './pages/GuideCategory';
import Main from './pages/Main';
import TopicDetail from './pages/TopicDetail';

// TODO: change the naming of the paths - should be in Czech language
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index path="/" element={<Main />} />
      <Route path="/sections/:id" element={<GuideCategory />} />
      <Route
        path="/sections/:sectionId/detail/:detailId"
        element={<TopicDetail />}
      />
    </RouterRoutes>
  );
};
