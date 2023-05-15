import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { Imagens } from "./Styles/Images";
import { Theme } from "./Styles/Theme";
import { Button } from "./Components/Button";
import {
  MainPage,
  CardsDiv,
  FormDiv,
  FormDateDiv,
} from "./Styles/StructureStyles";
import { ResetCSS } from "./Styles/GlobalStyle";
import { FirstCard, BackCard, NameAndDateDiv } from "./Components/Cards";
import { FlagCardImg } from "./Components/CardFlag";
import {
  CardNumber,
  FormText,
  Subtitle,
} from "./Components/FrontCardTextStyles";
import { GenericInput, LittleInput } from "./Components/Form";

export function App() {
  const [inputValue, setInputValue] = useState("0000 0000 0000 0000");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 16) {
      setInputValue(value);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <ResetCSS />
      <MainPage Bg={Imagens.BgOfDesktop}>
        <CardsDiv>
          <FirstCard BgCard={Imagens.FrontCard}>
            <FlagCardImg src={Imagens.CardFlag} alt="Flag" />
            <CardNumber>{inputValue}</CardNumber>
            <NameAndDateDiv>
              <Subtitle>Jhon Doe</Subtitle>
              <Subtitle>32/75</Subtitle>
            </NameAndDateDiv>
          </FirstCard>
          <BackCard BgCard={Imagens.BackCard}></BackCard>
        </CardsDiv>
        <FormDiv>
          <FormText>CARDHOLDER NAME</FormText>
          <GenericInput type="text" value={""} placeholder="e.g. Jhon Doe" />
          <FormText>CARD NUMBER</FormText>
          <GenericInput
            type="number"
            value={inputValue}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleInputChange}
          />
          <FormDateDiv>
            <FormText>EXP. DATE (MM/YY)</FormText>
            <LittleInput type="number" value={""} placeholder="MM" />
            <LittleInput type="number" value={""} placeholder="YY" />
            <FormText>CVC</FormText>
            <LittleInput type="number" value={""} placeholder="e.g. 123" />
          </FormDateDiv>
          <Button>Confirm</Button>
        </FormDiv>
      </MainPage>
    </ThemeProvider>
  );
}
