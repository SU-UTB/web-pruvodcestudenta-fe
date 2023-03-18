import React from "react";
import styled from "styled-components";
import {CityPicker} from "../../CityPicker";
import {Divider} from "../../Divider";


const SplashWrapper = styled.section`

  height: 540px;
  width: 100vw;
  background-color: #FF9F63;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

const H1 = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 62px;`



export const Splash = () => <SplashWrapper>
    <Divider height={127}/>
    <H1>Průvodce studenta splash screen</H1>
    <Divider height={17}/>
    <p>Průvodce studenta UTB ti rychle pomůže zorientovat se na nové vysoké škole.</p>
    <Divider height={67}/>
    <CityPicker/>
</SplashWrapper>