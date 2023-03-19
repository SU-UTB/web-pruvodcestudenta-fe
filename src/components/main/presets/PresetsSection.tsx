import {PresetsSectionWrapper} from "./PresetsSectionWrapper";
import {PresetsWrapper} from "./PresetsWrapper";
import {PresetsMore} from "./more/PresetsMore";
import {ITile, Tile} from "../../tiles/Tile";
import {PresetsHeader} from "./header/PresetsHeader";

const PresetSections: ITile[] = [
    {
        link: "zivot-ve-zline",
        p: "Život ve Zlíně"
    }, {
        link: "fakulty",
        p: "Fakulty a další součásti UTB"
    }, {
        link: "studentske-organizace",
        p: "Studentské organizace"
    }
];


export const PresetsSection = () => {

    return (
        <PresetsSectionWrapper>
            <PresetsHeader/>
            <PresetsWrapper>
                {PresetSections.map(({p, link}, i) => <Tile key={i.toString()} link={link} p={p}/>)}
            </PresetsWrapper>
            <PresetsMore/>
        </PresetsSectionWrapper>
    )
}