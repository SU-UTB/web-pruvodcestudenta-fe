import {BackButtonWrapper} from "./BackButtonWrapper";
import {useNavigate} from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();

    return (<BackButtonWrapper onClick={() => navigate(-1)}>
        Zpět
    </BackButtonWrapper>)
}