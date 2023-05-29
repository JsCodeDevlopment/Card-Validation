import { TyDiv } from "../Styles/StructureStyles";
import { Ty, FinishImg, TyInfo } from "./FrontCardTextStyles";
import { Button } from "./Button";
import { Imagens } from "../Styles/Images";

export const FinishScreen: React.FC = () => {
  return (
    <TyDiv>
      <FinishImg src={Imagens.Finish} />
      <Ty>THANK YOU!</Ty>
      <TyInfo>We´ve added your card details</TyInfo>
      <Button>Continue</Button>
    </TyDiv>
  );
};
