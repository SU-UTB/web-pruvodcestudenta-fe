import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    breakpoints: {
      tablet: string;
      desktop: string;
    };
    colors: {
      lightOrange: string;
    };
  }
}
