import React from "react";
import {RectorText} from "./text/RectorText";
import {RectorImage} from "./image/RectorImage";
import {RectorSectionWrapper} from "./RectorSectionWrapper";


export const RectorSection = () => {
    return (
        <RectorSectionWrapper>
            <RectorImage/>
            <RectorText/>
        </RectorSectionWrapper>
    )
}