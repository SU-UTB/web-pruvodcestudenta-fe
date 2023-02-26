import React from "react";
import styled from "styled-components";
import {CityPicker} from "./CityPicker";


const SplashWrapper = styled.div`

  height: 540px;
  width: 100vw;
  background-color: #FF9F63;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Splash = () => <SplashWrapper>
    <h1>Průvodce studenta splash screen</h1>
    <p>Průvodce studenta UTB ti rychle pomůže zorientovat se na nové vysoké škole.</p>
    <br/>
    <CityPicker/>
</SplashWrapper>