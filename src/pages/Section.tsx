import {Page} from "../components/Page";
import Header from "../components/Header";
import {useParams} from "react-router-dom";

export const Section = () => {
    const {id} = useParams();


    return (<Page>
        <Header/>
        <p>{id}</p>
    </Page>)
}