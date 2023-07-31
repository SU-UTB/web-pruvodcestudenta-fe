import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Routes } from './Routes';
import Theme from './styles/theme';
import { GuideSectionListProvider } from './contexts/GuideSectionListContext';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GuideSectionListProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </GuideSectionListProvider>
    </ThemeProvider>
  );
}

export default App;
