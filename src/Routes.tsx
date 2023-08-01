import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Main from './pages/Main';
import TopicDetail from './pages/TopicDetail';
import Section from './pages/Section';

// TODO: change the naming of the paths - should be in Czech language
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index path="/" element={<Main />} />
      <Route path="/sekce/:id" element={<Section />} />
      <Route
        path="/sekce/:sectionId/detail/:detailId"
        element={<TopicDetail />}
      />
    </RouterRoutes>
  );
};
