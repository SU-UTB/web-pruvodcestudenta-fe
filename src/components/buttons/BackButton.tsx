import {BackButtonWrapper} from "./BackButtonWrapper.styled";
import {useNavigate} from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();

    return (<BackButtonWrapper onClick={() => navigate(-1)}>
        Zpět
    </BackButtonWrapper>)
}