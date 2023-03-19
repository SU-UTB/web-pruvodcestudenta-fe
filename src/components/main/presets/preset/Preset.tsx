import {PresetWrapper} from "./PresetWrapper";
import {Link} from 'react-router-dom';

import {PresetP} from "./PresetP";


interface IPreset {
    p: string
}

export const Preset = (preset: IPreset) => {

    return (
        <Link to={'detail'}>
            <PresetWrapper>
                <PresetP> {preset.p}</PresetP>
            </PresetWrapper>

        </Link>)
}
