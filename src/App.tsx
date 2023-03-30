import { BrowserRouter } from 'react-router-dom';

import {
  PresetSectionsData,
  SectionsContext,
} from './contexts/SectionsContext';
import { ContentsData, TopicsContext } from './contexts/TopicsContext';
import { Routes } from './Routes';

function App() {
  return (
    <SectionsContext.Provider value={PresetSectionsData}>
      <TopicsContext.Provider value={ContentsData}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </TopicsContext.Provider>
    </SectionsContext.Provider>
  );
}

export default App;
