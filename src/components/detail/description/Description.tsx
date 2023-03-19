import {DescriptionWrapper} from "./DescriptionWrapper";
import styled from "styled-components";

interface IDescription {
    description: string
}

const DescriptionContent = styled.article`
  flex: 1;
  text-align: center;
`

export const Description = (props: IDescription) => {
    return <DescriptionWrapper>
        <DescriptionContent>{props.description}</DescriptionContent>
        <DescriptionContent>
            <p>?</p>
            <p>Mapa</p>
            <p>Odkazy</p>
            <p>Video</p>
            <p>Cokoliv</p>
        </DescriptionContent>
    </DescriptionWrapper>
}