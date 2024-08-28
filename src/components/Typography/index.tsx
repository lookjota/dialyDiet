import theme from "@theme";
import { Container } from "./styles";
import { TextProps } from "react-native";
import * as T from "./types";

export type TypographyStyle = {
  textAlign?: T.TextAlign
  fontFamily?: T.FontFamily
  lineHeight?: T.LineHeight
  fontSize?: T.FontSizes
  color?: T.Colors
}

type TypographyProps = TextProps & TypographyStyle

export function Typography({...props}: TypographyProps) {
  return (
    <Container {...props}>{props.children}</Container>
  )
}