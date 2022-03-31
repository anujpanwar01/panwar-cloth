import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Custom-btn.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base", //base button
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};

const CustomBtn = ({ buttonType, children, ...otherPorps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherPorps}>{children}</CustomButton>;
};

export default CustomBtn;
