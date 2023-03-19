import {BrowserRouter} from "react-router-dom";
import {Routes} from "./Routes";
import {SectionsContext} from "./contexts/SectionsContext";
import {ITile} from "./components/tiles/Tile";
import {useState} from "react";


const PresetSections: ITile[] = [
    {
        link: "zivot-ve-zline",
        title: "Život ve Zlíně",
        bgColor: "#FDA6A4"
    }, {
        link: "fakulty",
        title: "Fakulty a další součásti UTB",
        bgColor: "#FDA6A4"
    }, {
        link: "studentske-organizace",
        title: "Studentské organizace",
        bgColor: "#FDA6A4"
    }
];

function App() {
    const [presets, setPresets] = useState(PresetSections);

    return (<SectionsContext.Provider value={PresetSections}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </SectionsContext.Provider>);
}

export default App;
