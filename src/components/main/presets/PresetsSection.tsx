import {useContext} from 'react';

import {SectionsContext} from '../../../contexts/SectionsContext';
import {Tile} from '../../tiles/Tile';
import {PresetsHeader} from './header/PresetsHeader';
import {PresetsMore} from './more/PresetsMore';
import {PresetsSectionWrapper} from './PresetsSectionWrapper.styled';
import {PresetsWrapper} from './PresetsWrapper.styled';

export const PresetsSection = () => {
    const [sections] = useContext(SectionsContext);

    return (
        <PresetsSectionWrapper>
            <PresetsHeader/>
            <PresetsWrapper>
                {sections.map(({title, link, bgColor, description}, i) => (
                    <Tile
                        key={i.toString()}
                        link={link}
                        title={title}
                        prefix={'sections'}
                    />
                ))}
            </PresetsWrapper>
            <PresetsMore/>
        </PresetsSectionWrapper>
    );
};
