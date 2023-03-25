import {SplashWrapper} from "./SplashWrapper.styled";
import {SplashH6} from "./SplashH6.styled";


interface ISplash {
    sectionBgColor: string,
    title: string
}

export const Splash = (props: ISplash) => {
    return <SplashWrapper backgroundColor={props.sectionBgColor}>
        <SplashH6>{props.title}</SplashH6>
    </SplashWrapper>

}