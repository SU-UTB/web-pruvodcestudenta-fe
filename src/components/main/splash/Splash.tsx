import {CityPicker} from "../../CityPicker";
import {Divider} from "../../Divider";
import {SplashWrapper} from "./SplashWrapper";
import {SplashH1} from "./SplashH1";


export const Splash = () => <SplashWrapper>
    <Divider height={127}/>
    <SplashH1>Průvodce studenta splash screen</SplashH1>
    <Divider height={17}/>
    <p>Průvodce studenta UTB ti rychle pomůže zorientovat se na nové vysoké škole.</p>
    <Divider height={67}/>
    <CityPicker/>
</SplashWrapper>