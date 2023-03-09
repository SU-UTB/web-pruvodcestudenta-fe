import styled from "styled-components";
import React from "react";

const PresetsSectionWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const HeaderWrapper = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  text-align: center;
`
const PresetsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 21px;
  margin-left: 100px;
  margin-right: 100px;
`

const MoreWrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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

const PresetWrapper = styled.div`
  width: 258px;
  height: 258px;
  border-radius: 8px;
  background-color: #FFDEC9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Preset = ({preset}) => {
    return (<PresetWrapper>
        <p> {preset}</p>
    </PresetWrapper>)
}

export const PresetsSection = () => {

    return (
        <PresetsSectionWrapper>
            <HeaderWrapper>
                <p>Nevíš kudy kam? To je v pořádku.</p>
                <p>Přečti si vše důležité o UTB zde.</p>
            </HeaderWrapper>
            <PresetsWrapper>
                {Presets.map(p => <Preset preset={p}/>)}
            </PresetsWrapper>
            <MoreWrapper>
                <p>Vice</p>
                <p>arrDown</p>
            </MoreWrapper>
        </PresetsSectionWrapper>
    )
}