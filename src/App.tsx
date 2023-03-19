import {BrowserRouter} from "react-router-dom";
import {Routes} from "./Routes";
import {PresetSectionsData, SectionsContext} from "./contexts/SectionsContext";
import {ContentsContext, ContentsData} from "./contexts/ContentsContext";


function App() {
    return (<SectionsContext.Provider value={PresetSectionsData}>
        <ContentsContext.Provider value={ContentsData}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </ContentsContext.Provider>
    </SectionsContext.Provider>);
}

export default App;
