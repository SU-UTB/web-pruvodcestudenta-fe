import {SplashWrapper} from "./SplashWrapper";
import {SplashTitle} from "./SplashTitle";


interface ISplash {
    sectionBgColor: string,
    title: string
}

export const Splash = (props: ISplash) => {
    return <SplashWrapper backgroundColor={props.sectionBgColor}>
        <SplashTitle>{props.title}</SplashTitle>
    </SplashWrapper>

}