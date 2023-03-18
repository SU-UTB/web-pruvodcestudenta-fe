import arrow_down from "../../../../assets/icons/arrow_down.svg";
import React from "react";
import {Divider} from "../../../Divider";
import {MoreWrapper} from "./MoreWrapper";
import {MoreText} from "./MoreText";
import {MoreArrowDown} from "./MoreArrowDown";


export const PresetsMore = () => <MoreWrapper>
    <MoreArrowDown src={arrow_down}/>
    <Divider height={8}/>
    <MoreText>Více</MoreText>
</MoreWrapper>