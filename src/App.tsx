import {BrowserRouter} from 'react-router-dom';

import {Routes} from './Routes';
import {SectionsProvider} from "./contexts/SectionsContext";

function App() {
    return (
        <SectionsProvider>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </SectionsProvider>
    );
}

export default App;
