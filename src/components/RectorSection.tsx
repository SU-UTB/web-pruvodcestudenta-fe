import styled from "styled-components";
import React from "react";
import rector from '../assets/images/rector.jpg';

const RectorSectionWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  column-gap: 82px;
  padding-top: 48px;
  padding-bottom: 48px;
`

const RectorImageWrapper = styled.img`
  min-width: 519px;
  height: 519px;
  margin-left: 250px;
  object-fit: cover;
  border-radius: 12px;
`
const RectorTextWrapper = styled.div`
  margin-right: 210px;
`

const RectorImage = () => {
    return (<RectorImageWrapper src={rector}/>)
}
const RectorText = () => {
    return (<RectorTextWrapper>
        <p>Vážení studenti,</p>
        <br/>
        <p>rád bych vám osobně poděkoval, že jste se rozhodli zapsat a nastoupit ke studiu na Univerzitě Tomáše Bati ve
            Zlíně navzdory nejistotě, která v této době panuje.</p>
        <br/>
        <p>Stojíte nyní na prahu nové životní etapy, abyste se naučili novým znalostem a dovednostem, poznali nové
            kamarády, a také získali i zahraniční zkušenost.</p>
        <br/>
        <p>Tento průvodce vám pomůže se rychleji zorientovat v univerzitním prostředí, a rovněž zpříjemnit váš
            studentský život.</p>
        <br/>
        <p>Nebojte se v případě potřeby obrátit o pomoc na studijní oddělení či na některou poradnu, nebo jen požádejte
            o radu staršího spolužáka. Rozhodně se nenechte odradit od studia po prvních nezdarech u zkoušek, ale o to
            více pilně studujte. Věřím, že za několik let sklidíte plody své práce.</p>
        <br/>
        <p>Přeji vám pevné zdraví a hodně optimismu a sil!</p>
        <br/>
        <br/>
        <p>Milan Adámek, rektor</p>
    </RectorTextWrapper>)
}

export const RectorSection = () => {
    return (
        <RectorSectionWrapper>
            <RectorImage/>
            <RectorText/>
        </RectorSectionWrapper>
    )
}