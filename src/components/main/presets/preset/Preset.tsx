import {PresetWrapper} from "./PresetWrapper";
import {Link} from 'react-router-dom';

import {PresetP} from "./PresetP";


export interface IPreset {
    p: string
    link: string
}

export const Preset = (preset: IPreset) => {

    return (
        <Link to={`sections/${preset.link}`}>
            <PresetWrapper>
                <PresetP> {preset.p}</PresetP>
            </PresetWrapper>

        </Link>)
}
