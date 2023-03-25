import {DescriptionWrapper} from "./DescriptionWrapper.styled";

interface IDescription {
    description: string
}

export const Description = (props: IDescription) => {
    return <DescriptionWrapper>
        <p>{props.description}</p>
    </DescriptionWrapper>
}