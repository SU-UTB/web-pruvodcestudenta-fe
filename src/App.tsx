import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  PresetSectionsData,
  SectionsContext,
} from './contexts/SectionsContext';
import { ContentsData, TopicsContext } from './contexts/TopicsContext';
import { Routes } from './Routes';
import Theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SectionsContext.Provider value={PresetSectionsData}>
        <TopicsContext.Provider value={ContentsData}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </TopicsContext.Provider>
      </SectionsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
