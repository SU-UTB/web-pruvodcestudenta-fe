import {PresetsSectionWrapper} from "./PresetsSectionWrapper";
import {PresetsWrapper} from "./PresetsWrapper";
import {PresetsMore} from "./more/PresetsMore";
import {IPreset, Preset} from "./preset/Preset";
import {PresetsHeader} from "./header/PresetsHeader";

const Presets: IPreset[] = [
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
                {Presets.map(({p, link}, i) => <Preset key={i.toString()} link={link} p={p}/>)}
            </PresetsWrapper>
            <PresetsMore/>
        </PresetsSectionWrapper>
    )
}