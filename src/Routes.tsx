import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Main from './pages/Main';
import TopicDetail from './pages/TopicDetail';
import GuideSection from './pages/GuideSection';

// TODO: change the naming of the paths - should be in Czech language
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index path="/" element={<Main />} />
      <Route path="/sekce/:id" element={<GuideSection />} />
      <Route
        path="/sekce/:sectionId/detail/:detailId"
        element={<TopicDetail />}
      />
    </RouterRoutes>
  );
};
