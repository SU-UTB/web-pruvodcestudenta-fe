import {PresetWrapper} from "./PresetWrapper";

import {PresetP} from "./PresetP";


interface IPreset {
    p: string
}

export const Preset = (preset: IPreset) => {
    return (<PresetWrapper>
        <PresetP> {preset.p}</PresetP>
    </PresetWrapper>)
}
