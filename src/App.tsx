import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Routes } from './Routes';
import Theme from './styles/theme';
import { SectionListProvider } from './contexts/SectionListContext';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SectionListProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </SectionListProvider>
    </ThemeProvider>
  );
}

export default App;
