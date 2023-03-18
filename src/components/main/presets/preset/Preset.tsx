import {PresetWrapper} from "./PresetWrapper";
import React from "react";
import {PresetP} from "./PresetP";


interface IPreset {
    p: string
}

export const Preset = (preset: IPreset) => {
    return (<PresetWrapper>
        <PresetP> {preset.p}</PresetP>
    </PresetWrapper>)
}
