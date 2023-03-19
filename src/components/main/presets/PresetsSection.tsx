import {PresetsSectionWrapper} from "./PresetsSectionWrapper";
import {PresetsWrapper} from "./PresetsWrapper";
import {PresetsMore} from "./more/PresetsMore";
import {Tile} from "../../tiles/Tile";
import {PresetsHeader} from "./header/PresetsHeader";
import {useContext} from "react";
import {SectionsContext} from "../../../contexts/SectionsContext";


export const PresetsSection = () => {
    const sections = useContext(SectionsContext);
    return (
        <PresetsSectionWrapper>
            <PresetsHeader/>
            <PresetsWrapper>
                {sections.map(({title, link, bgColor}, i) => <Tile key={i.toString()} link={link} title={title}
                                                                   bgColor={bgColor}/>)}
            </PresetsWrapper>
            <PresetsMore/>
        </PresetsSectionWrapper>
    )
}