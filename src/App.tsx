import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Routes } from './Routes';
import { GuideCategoryListProvider } from './contexts/GuideCategoryListContext';
import Theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GuideCategoryListProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </GuideCategoryListProvider>
    </ThemeProvider>
  );
}

export default App;
