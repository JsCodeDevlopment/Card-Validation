import { ThemeProvider } from "styled-components";
import { Imagens } from "./Styles/Images";
import { Theme } from "./Styles/Theme";
import { Button } from "./Components/Button";
import { MainPage, CardsDiv, FormDiv } from "./Styles/StructureStyles";
import { ResetCSS } from "./Styles/GlobalStyle";
import { FirstCard, BackCard, NameAndDateDiv } from "./Components/Cards";
import { FlagCardImg } from "./Components/CardFlag";
import { CardNumber, Subtitle } from "./Components/FrontCardTextStyles";

import React, { useState } from "react";

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
          FORMULÁRIO
          <br />
          <input type="text" placeholder="name" />
          <br />
          <input
            type="number"
            value={inputValue}
            placeholder="card number"
            onChange={handleInputChange}
          />
          <br />
          <Button>Confirm</Button>
        </FormDiv>
      </MainPage>
    </ThemeProvider>
  );
}
