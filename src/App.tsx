import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { Imagens } from "./Styles/Images";
import { Theme } from "./Styles/Theme";
import { Button } from "./Components/Button";
import { MainPage, CardsDiv, FormDiv } from "./Styles/StructureStyles";
import { ResetCSS } from "./Styles/GlobalStyle";
import { FirstCard, BackCard, NameAndDateDiv } from "./Components/Cards";
import { FlagCardImg } from "./Components/CardFlag";
import {
  CardNumber,
  FormText,
  Subtitle,
} from "./Components/FrontCardTextStyles";
import { GenericInput, LittleInput } from "./Components/Form";


export const App: React.FC = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    name: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { cardNumber, name, mm, yy, cvc } = formData;
    if (
      cardNumber.trim() === "" ||
      name.trim() === "" ||
      mm.trim() === "" ||
      yy.trim() === "" ||
      cvc.trim() === ""
    ) {
      setErrorMessage("Todos os campos são obrigatórios!");
      return;
    }

    setErrorMessage("");
    console.log("Dados enviados:", formData);
    alert("Obrigado!");
  };

  return (
    <ThemeProvider theme={Theme}>
      <ResetCSS />
      <MainPage bg={Imagens.BgOfDesktop}>
        <CardsDiv>
          <FirstCard bgcard={Imagens.FrontCard}>
            <FlagCardImg src={Imagens.CardFlag} alt="Flag" />
            <CardNumber>{formData.cardNumber}</CardNumber>
            <NameAndDateDiv>
              <Subtitle>{formData.name}</Subtitle>
              <Subtitle>
                {formData.mm}/{formData.yy}
              </Subtitle>
            </NameAndDateDiv>
          </FirstCard>
          <BackCard bgcard={Imagens.BackCard}></BackCard>
        </CardsDiv>
        <FormDiv>
          <form onSubmit={handleSubmit}>
            <FormText>
              CARDHOLDER NAME
              <GenericInput
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Jhon Doe"
                required
              />
            </FormText>
            <FormText>
              CARD NUMBER
              <GenericInput
                type="number"
                value={formData.cardNumber}
                placeholder="e.g. 1234 5678 9123 0000"
                onChange={handleInputChange}
                maxLength={19}
                required
              />
            </FormText>
            <FormText>
              EXP. DATE (MM/YY)
              <LittleInput
                type="number"
                onChange={handleInputChange}
                value={formData.mm}
                maxLength={2}
                placeholder="MM"
                required
              />
              <LittleInput
                type="number"
                onChange={handleInputChange}
                value={formData.yy}
                placeholder="YY"
                maxLength={2}
                required
              />
            </FormText>
            <FormText>
              CVC
              <LittleInput
                type="number"
                onChange={handleInputChange}
                value={formData.cvc}
                placeholder="e.g. 123"
                maxLength={3}
                required
              />
            </FormText>
            <Button type="submit">Confirm</Button>
          </form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </FormDiv>
      </MainPage>
    </ThemeProvider>
  );
};
