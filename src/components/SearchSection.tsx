import styled from "styled-components";

const SearchSectionWrapper = styled.div`
  height: 347px;
  display: flex;
  flex-direction: column;
  padding: 47px;
`

const SearchInput = styled.input`
  width: 556px;
  height: 60px;`

const SearchTags = styled.div`display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: (3*220)+ (3*116);
  background-color: red;
`

const SearchTag = styled.div`
  width: 220px;
  height: 60px;
  margin-right: 116px;
  background-color: white;
  border-radius: 25px;`

const PickedTags = [
    "Univerzitni svet",
    "Zivot ve zline",
    "Technicke zalezitosti",
    "Univerzitni sluzby",
    "\"Prakticke rady\"",
    "Dalsi...",

];

export const SearchSection = () => <SearchSectionWrapper>

    <SearchInput></SearchInput>
    <SearchTags>
        {PickedTags.map(t => <SearchTag>{t}</SearchTag>)}
    </SearchTags>
</SearchSectionWrapper>