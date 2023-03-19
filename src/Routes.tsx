import {Route, Routes as RouterRoutes} from "react-router-dom";
import Main from "./pages/Main";
import {Section} from "./pages/Section";

export const Routes = () => {
    return (<RouterRoutes>
        <Route index path="/" element={<Main/>}/>
        <Route path="/sections/:id" element={<Section/>}/>
    </RouterRoutes>)
}