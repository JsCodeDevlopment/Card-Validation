import { ThemeProvider } from "styled-components";
import { Imagens } from "./Styles/Images";
import { Theme } from "./Styles/Theme";
import { Button } from "./Components/Button";
import { MainPage, CardsDiv, FormDiv } from "./Styles/StructureStyles";
import { ResetCSS } from "./Styles/GlobalStyle";
import { FirstCard, BackCard, NameAndDateDiv } from "./Components/Cards";
import { FlagCardImg } from "./Components/CardFlag";
import { CardNumber, Subtitle } from "./Components/FrontCardTextStyles";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ResetCSS />
      <MainPage Bg={Imagens.BgOfDesktop}>
        <CardsDiv>
          <FirstCard BgCard={Imagens.FrontCard}>
            <FlagCardImg src={Imagens.CardFlag} alt="Flag"/>
            <CardNumber>0000 0000 0000 0000</CardNumber>
            <NameAndDateDiv>
              <Subtitle>Jhon Doe</Subtitle>
              <Subtitle>32/75</Subtitle>
            </NameAndDateDiv>
          </FirstCard>
          <BackCard BgCard={Imagens.BackCard}></BackCard>
        </CardsDiv>
        <FormDiv>
          FORMULÁRIO<br/>
          <input type="text"  placeholder="name"/><br/>
          <input type="number" placeholder="card number"/><br/>
          <Button>Confirm</Button>
        </FormDiv>
      </MainPage>
    </ThemeProvider>
  );
}