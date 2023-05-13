import { ThemeProvider } from "styled-components";
import { Imagens } from "./Styles/Images";
import { Theme } from "./Styles/Theme";
import { Button } from "./Components/Button";
import { MainPage, CardsDiv, FormDiv } from "./Styles/StructureStyles";
import { ResetCSS } from "./Styles/GlobalStyle";
import { FirstCard, BackCard } from "./Components/Cards";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ResetCSS />
      <MainPage Bg={Imagens.BgOfDesktop}>
        <CardsDiv>
          <FirstCard BgCard={Imagens.FrontCard}></FirstCard>
          <BackCard BgCard={Imagens.BackCard}></BackCard>
        </CardsDiv>
        <FormDiv>
          FORMULÁRIO
          <Button>Confirm</Button>
        </FormDiv>
      </MainPage>
    </ThemeProvider>
  );
}
