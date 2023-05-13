import { ThemeProvider } from "styled-components";
import { Imagens } from "./Styles/Images";
import { Theme } from "./Styles/Theme";
import { Button } from "./Components/Button";
import { MainPage } from "./Styles/StructureStyles";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainPage Bg={Imagens.BgOfDesktop}>
        <h1>Hello World</h1>
        <img src={Imagens.FrontCard} alt="" />
        <Button>Confirm</Button>
      </MainPage>
    </ThemeProvider>
  );
}
