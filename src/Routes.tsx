import {Route, Routes as RouterRoutes} from "react-router-dom";
import Main from "./pages/Main";
import {Section} from "./pages/Section";
import {Detail} from "./pages/Detail";

export const Routes = () => {
    return (<RouterRoutes>
        <Route index path="/" element={<Main/>}/>
        <Route path="/sections/:id" element={<Section/>}/>
        <Route path="/sections/:section/detail/:detail" element={<Detail/>}/>
    </RouterRoutes>)
}