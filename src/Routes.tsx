import {Route, Routes as RouterRoutes} from "react-router-dom";
import Main from "./pages/Main";
import {Detail} from "./pages/Detail";

export const Routes = () => {
    return (<RouterRoutes>
        <Route index path="/" element={<Main/>}/>
        <Route path="/detail" element={<Detail/>}/>
    </RouterRoutes>)
}