import {PresetsSectionWrapper} from "./PresetsSectionWrapper";
import {PresetsWrapper} from "./PresetsWrapper";
import {PresetsMore} from "./more/PresetsMore";
import {Tile} from "../../tiles/Tile";
import {PresetsHeader} from "./header/PresetsHeader";
import {ISection} from "../../../contexts/SectionsContext";


interface IPresets {
    sections: ISection[]
}

export const PresetsSection = (props: IPresets) => {
    return (
        <PresetsSectionWrapper>
            <PresetsHeader/>
            <PresetsWrapper>
                {props.sections
                    .map((section, i) =>
                        <Tile key={i.toString()} link={section.link}
                              title={section.title} prefix={'sections'}/>)}
            </PresetsWrapper>
            <PresetsMore/>
        </PresetsSectionWrapper>
    )
}