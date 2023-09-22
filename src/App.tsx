import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { Imagens } from "./Styles/Images";
import { Theme } from "./Styles/Theme";
import { Button } from "./Components/Button";
import {
  MainPage,
  CardsDiv,
  FormDiv,
  FormElement,
} from "./Styles/StructureStyles";
import { ResetCSS } from "./Styles/GlobalStyle";
import {
  FirstCard,
  BackCard,
  NameAndDateDiv,
  CvcCode,
} from "./Components/Cards";
import { FlagCardImg } from "./Components/CardFlag";
import {
  CardNumber,
  FormText,
  Subtitle,
} from "./Components/FrontCardTextStyles";
import { GenericInput, LittleInput } from "./Components/Form";
import { FinishScreen } from "./Components/FinishScreen";

export const App: React.FC = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    name: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [finished, setFinished] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    let newValue = value;

    if (name === "cardNumber") {
      newValue = newValue.replace(/\s/g, "");
      if (newValue.length > 16) {
        return;
      }
      newValue = newValue.replace(/(\d{4})/g, "$1 ");
    }

    if (name === "mm" || name === "yy") {
      newValue = newValue.replace(/\D/g, "");
      if (newValue.length > 2) {
        return;
      }
    }

    if (name === "name") {
      newValue = newValue.replace(/[^a-zA-Z ]/g, "");
    } 

    console.log(newValue.length);
    if (name === "cvc") {
      newValue = newValue.replace(/\D/g, "");
      if (newValue.length > 3) {
        return;
      }
    }
    console.log(name);

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
    setFinished(true);
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
              <Subtitle>{formData.name.toUpperCase()}</Subtitle>
              <Subtitle>
                {formData.mm}/{formData.yy}
              </Subtitle>
            </NameAndDateDiv>
          </FirstCard>
          <BackCard bgcard={Imagens.BackCard}>
            <CvcCode>{formData.cvc}</CvcCode>
          </BackCard>
        </CardsDiv>
        <FormDiv>
          {finished ? (
            <FinishScreen />
          ) : (
            <>
              <FormElement onSubmit={handleSubmit}>
                <FormText>
                  CARDHOLDER NAME
                  <GenericInput
                    type="text"
                    name="name"
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
                    name="cardNumber"
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
                    name="mm"
                    onChange={handleInputChange}
                    value={formData.mm}
                    maxLength={2}
                    placeholder="MM"
                    required
                  />
                  <LittleInput
                    type="number"
                    name="yy"
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
                    name="cvc"
                    onChange={handleInputChange}
                    value={formData.cvc}
                    placeholder="e.g. 123"
                    maxLength={3}
                    required
                  />
                </FormText>
                <Button type="submit">Confirm</Button>
              </FormElement>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </>
          )}
        </FormDiv>
      </MainPage>
    </ThemeProvider>
  );
};
