import React from "react";
import {PresetsSectionWrapper} from "./PresetsSectionWrapper";
import {PresetsWrapper} from "./PresetsWrapper";
import {PresetsMore} from "./more/PresetsMore";
import {Preset} from "./preset/Preset";
import {PresetsHeader} from "./header/PresetsHeader";

const Presets = [
    "Zivot ve zline",
    "Zivot ve zline",
    "Zivot ve zline",
    "Zivot ve zline",
    "Zivot ve zline",
    "Zivot ve zline",
    "Zivot ve zline",
    "Zivot ve zline",
    "Zivot ve zline",
    "Zivot ve zline"
];


export const PresetsSection = () => {

    return (
        <PresetsSectionWrapper>
            <PresetsHeader/>
            <PresetsWrapper>
                {Presets.map(p => <Preset p={p}/>)}
            </PresetsWrapper>
            <PresetsMore/>
        </PresetsSectionWrapper>
    )
}