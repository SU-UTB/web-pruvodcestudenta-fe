import {BrowserRouter} from 'react-router-dom';

import {ContentsData, TopicsContext} from './contexts/TopicsContext';
import {Routes} from './Routes';
import {SectionsProvider} from "./contexts/SectionsContext";

function App() {
    return (
        <SectionsProvider>
            <TopicsContext.Provider value={ContentsData}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </TopicsContext.Provider>
        </SectionsProvider>
    );
}

export default App;
