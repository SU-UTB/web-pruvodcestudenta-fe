import { Route, Routes as RouterRoutes } from 'react-router-dom';

// import Faq from './pages/Faq';
import Main from './pages/Main';
import Section from './pages/Section';
import TopicDetail from './pages/TopicDetail';

// TODO: change the naming of the paths - should be in Czech language
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index path="/" element={<Main />} />
      <Route path="/:sectionSlug" element={<Section />} />
      <Route path="/:sectionSlug/:topicSlug" element={<TopicDetail />} />
      {/* <Route path="/faq" element={<Faq />} /> */}
    </RouterRoutes>
  );
};
