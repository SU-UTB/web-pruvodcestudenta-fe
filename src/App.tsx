import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {SectionsProvider} from "./contexts/SectionsContext";
import {Routes} from './Routes';
import Theme from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            < SectionsProvider>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </SectionsProvider>
        </ThemeProvider>
    )
        ;
}

export default App;
