import styled from "styled-components";

const SearchSectionWrapper = styled.div`
  height: 347px;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const SearchInput = styled.input`
  width: 556px;
  height: 60px;
  margin-bottom: 36px;
  margin-left: 414px;
  -webkit-border-radius: 47px;
  -moz-border-radius: 47px;
  border-radius: 47px;
  border: 0.5px solid #c1c1c1;
  padding-left: 25px;
`

const SearchTags = styled.div`display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 100px;
  row-gap: 36px;
  margin-right: 414px;
  margin-left: 414px;
`

const SearchTag = styled.div`
  min-width: 180px;
  height: 60px;
  background-color: white;
  border-radius: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #c1c1c1;
`

const SearchDivider = styled.div`
  min-height: 47px;
`

const PickedTags = [
    "Univerzitni svet",
    "Zivot ve zline",
    "Technicke zalezitosti",
    "Univerzitni sluzby",
    "\"Prakticke rady\"",
    "Dalsi...",

];

export const SearchSection = () => <SearchSectionWrapper>

    <SearchDivider/>
    <SearchInput placeholder={"Hledat"}></SearchInput>
    <SearchTags>
        {PickedTags.map(t => <SearchTag>{t}</SearchTag>)}
    </SearchTags>
    <SearchDivider/>
</SearchSectionWrapper>