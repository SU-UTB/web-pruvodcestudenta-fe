import {BrowserRouter} from "react-router-dom";
import {Routes} from "./Routes";
import {ISection, SectionsContext} from "./contexts/SectionsContext";
import {useState} from "react";


const PresetSections: ISection[] = [
    {
        link: "prakticke-rady",
        title: "Praktické rady",
        bgColor: "#FDA6A4",
        description: "Něco random o tom jaké systémy, věci, lifehacky na univerzitě provozujeme, něco jakoby možná vlastně smysluplného a zajímavého co tu nebude 2x nakopírované aby to bylo dost dlouhé."
    }, {
        link: "prakticke-rady",
        title: "Praktické rady",
        bgColor: "#FDA6A4",
        description: "Něco random o tom jaké systémy, věci, lifehacky na univerzitě provozujeme, něco jakoby možná vlastně smysluplného a zajímavého co tu nebude 2x nakopírované aby to bylo dost dlouhé."
    }, {
        link: "prakticke-rady",
        title: "Praktické rady",
        bgColor: "#FDA6A4",
        description: "Něco random o tom jaké systémy, věci, lifehacky na univerzitě provozujeme, něco jakoby možná vlastně smysluplného a zajímavého co tu nebude 2x nakopírované aby to bylo dost dlouhé."
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
