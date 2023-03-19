import {BrowserRouter} from "react-router-dom";
import {Routes} from "./Routes";
import {SectionsContext} from "./contexts/SectionsContext";
import {ITile} from "./components/tiles/Tile";
import {useState} from "react";


const PresetSections: ITile[] = [
    {
        link: "zivot-ve-zline",
        title: "Život ve Zlíně",
        bgColor: "#FDA6A4",
        description: "Něco random o tom jak se ve zlíně žije bych tady napsal, něco jakoby možná vlastně smysluplného a zajímavého co tu nebude 2x nakopírované aby to bylo dost dlouhé."
    }, {
        link: "fakulty",
        title: "Fakulty a další součásti UTB",
        bgColor: "#FDA6A4",
        description: "Něco random o tom jak se ve zlíně žije bych tady napsal, něco jakoby možná vlastně smysluplného a zajímavého co tu nebude 2x nakopírované aby to bylo dost dlouhé."

    }, {
        link: "studentske-organizace",
        title: "Studentské organizace",
        bgColor: "#FDA6A4",
        description: "Něco random o tom jak se ve zlíně žije bych tady napsal, něco jakoby možná vlastně smysluplného a zajímavého co tu nebude 2x nakopírované aby to bylo dost dlouhé."
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
